import { test } from "../lib/utilities/BaseTest"
import { testConfig } from "../testConfig"
import { createObjectCsvWriter } from 'csv-writer'


test('Generate Product\'s PR CSV Report', async ({ prPage }) => {
    await prPage.navigateToPRPage()

    const data = await prPage.getPRData()
    const report = createObjectCsvWriter({
        path: testConfig.csvReportPath,
        header: [
            { id: 'title', title: 'PR Name' },
            { id: 'date', title: 'Created Date' },
            { id: 'author', title: 'Author' }
        ]
    })
    await report.writeRecords(data);
})