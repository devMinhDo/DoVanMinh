import { ReportDecorator } from './ReportDecorator';
import { Report } from './interface/Report.interface';

class EncryptedReport extends ReportDecorator {
    constructor(report: Report) {
        super(report);
    }

    generate(): string {
        const report = this.decoratedReport.generate();
        return this.encrypt(report);
    }

    private encrypt(report: string): string {
        return `Encrypted(${report})`;
    }
}

export { EncryptedReport }