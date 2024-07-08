import { Report } from './interface/Report.interface';

abstract class ReportDecorator implements Report {
    protected decoratedReport: Report;

    constructor(report: Report) {
        this.decoratedReport = report;
    }

    abstract generate(): string;
}

export { ReportDecorator }