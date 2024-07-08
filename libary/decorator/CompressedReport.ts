import { ReportDecorator } from "./ReportDecorator";
import { Report } from "./interface/Report.interface";

class CompressedReport extends ReportDecorator {
    constructor(report: Report) {
        super(report);
    }

    generate(): string {
        const report = this.decoratedReport.generate();
        return this.compress(report);
    }

    private compress(report: string): string {
        return `Compressed(${report})`;
    }
}

export { CompressedReport }