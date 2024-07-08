'use strict';

import {
    EmailNotificationFactory,
    SMSNotificationFactory,
    PushNotificationFactory,
} from "@connect/notice-error";
import { paymentProcessor, PayPal, Stripe, Square } from '@connect/adapter-pattern';
import observer from '@connect/observer-pattern';
const { WeatherData, CurrentConditionsDisplay, ForecastDisplay } = observer;
import decorator from '@connect/decorator-pattern';
const { BasicReport,
    EncryptedReport,
    CompressedReport,
    TimestampedReport
} = decorator;

import { Light, LightOffCommand, LightOnCommand, RemoteControl } from '@connect/command-pattern';
import { HotelBookingFacade } from '@connect/facade-pattern';

import express from 'express';
import testApi from './test-api/build/server.js';

const paypal = new PayPal();
const instantPaymentProcessor = new paymentProcessor(paypal);
instantPaymentProcessor.payment(100);

const emailFactory = new EmailNotificationFactory();
emailFactory.sendNotification("Hello via Email!");

// SMS notification
const smsFactory = new SMSNotificationFactory();
smsFactory.sendNotification("Hello via SMS!");

// Push notification
const pushFactory = new PushNotificationFactory();
pushFactory.sendNotification("Hello via Push Notification!");

const weatherData = new WeatherData();

const currentDisplay = new CurrentConditionsDisplay();
const forecastDisplay = new ForecastDisplay();

weatherData.registerObserver(currentDisplay);
weatherData.registerObserver(forecastDisplay);

weatherData.setMeasurements(25, 65, 1013);
weatherData.setMeasurements(28, 70, 1012);
weatherData.setMeasurements(22, 90, 1011);

let report = new BasicReport();
console.log(report.generate());

report = new EncryptedReport(report);
console.log(report.generate());

report = new CompressedReport(report);
console.log(report.generate());

report = new TimestampedReport(report);
console.log(report.generate());

const light = new Light();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);

const remote = new RemoteControl();
remote.setOnCommand(lightOn);
remote.setOffCommand(lightOff);

remote.pressOn();
remote.pressOff();

const hotelBooking = new HotelBookingFacade();
hotelBooking.bookRoomForCustomer("John Doe", 101, 150);


async function startServer() {
    express()
        .use(testApi.default)
        .listen(3001, () => console.log('Api listening on port 3001'));
}
startServer();