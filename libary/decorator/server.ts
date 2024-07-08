import { BasicReport } from './BasicReport'
import { EncryptedReport } from './EncryptedReport'
import { CompressedReport } from './CompressedReport'
import { TimestampedReport } from './TimestampedReport';
import { Report } from './interface/Report.interface';

export default {
    BasicReport,
    EncryptedReport,
    CompressedReport,
    TimestampedReport
}

export type {
    Report
}
