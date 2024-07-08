import { CustomerManagement } from "./CustomerManagement";
import { PaymentProcessing } from "./PaymentProcessing";
import { RoomManagement } from "./RoomManagement";

class HotelBookingFacade {
    private customerManagement: CustomerManagement;
    private roomManagement: RoomManagement;
    private paymentProcessing: PaymentProcessing;

    constructor() {
        this.customerManagement = new CustomerManagement();
        this.roomManagement = new RoomManagement();
        this.paymentProcessing = new PaymentProcessing();
    }

    bookRoomForCustomer(name: string, roomNumber: number, amount: number): void {
        this.customerManagement.addCustomer(name);
        this.roomManagement.bookRoom(roomNumber);
        this.paymentProcessing.processPayment(amount);
        console.log(`Room ${roomNumber} booked for ${name} with payment of ${amount}`);
    }
}

export { HotelBookingFacade }