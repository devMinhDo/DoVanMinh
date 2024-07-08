import { Report } from "./interface/Report.interface";

class BasicReport implements Report {
    generate(): string {
        return "This is a basic report.";
    }
}

export { BasicReport }