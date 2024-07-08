import { ReportDecorator } from './ReportDecorator';
import { Report } from './interface/Report.interface';

class TimestampedReport extends ReportDecorator {
    constructor(report: Report) {
        super(report);
    }

    generate(): string {
        const report = this.decoratedReport.generate();
        return this.addTimestamp(report);
    }

    private addTimestamp(report: string): string {
        return `${report} [Timestamp: ${new Date().toISOString()}]`;
    }
}

export { TimestampedReport }