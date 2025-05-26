import { formatErrors } from "appium/build/lib/config-file"

class Page {

    ARROW_BACK = 'arrow back' 
    OK = 'OK'

    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    getViewWithtext (text) {
        return $('//android.view.View[@text="' + text + '"]');
    }

    getTextViewWithtext (text) {
        return $('//android.widget.TextView[@text="' + text + '"]');
    }

    getInputFieldWithHint (hint) {
        return $('//*[@class="android.widget.EditText"][@hint="'+ hint +'"]');
    }

    getButtonwithText (text) {
        return $('//android.widget.Button[@text="'+ text +'"]');
    }

    getBackArrow () {
        return this.getButtonwithText(this.ARROW_BACK);
    }

    getOkBtn () {
        return this.getButtonwithText(this.OK);
    }

    getErrorDialog () {
        return $('//android.app.Dialog[@text="Error"]');
    }

    getInfoDialog () {
        return $('//android.app.Dialog[@text="INFO"]');
    }

    getDatePicker () {
    return $('//android.widget.DatePicker[@resource-id="android:id/datePicker"]');
    }

    async selectDateFromPicker(dateStr) 
    {
        const [month, day, year] = dateStr.split('/').map(Number);
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const targetMonthName = monthNames[month - 1];

        await waitAndClick($('android=new UiSelector().resourceId("android:id/date_picker_header_year")'));

        await $(`android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("${year}")`);
        await waitAndClick($(`android=new UiSelector().text("${year}")`));

        let currentMonthYear = await $('android=new UiSelector().resourceId("android:id/date_picker_header_date")').getText();
        while (!currentMonthYear.includes(targetMonthName) || !currentMonthYear.includes(`${year}`)) {

            const [currMonth, currDay, currYear] = currentMonthYear.split(' ');
            const currMonthIndex = monthNames.indexOf(currMonth);
            const currYearNum = parseInt(currYear);

            const targetDate = new Date(year, month - 1);
            const currentDate = new Date(currYearNum, currMonthIndex);

            if (targetDate > currentDate) {
                await waitAndClick($('android=new UiSelector().description("Next month")'));
            } else {
                await waitAndClick($('android=new UiSelector().description("Previous month")'));
            }

            currentMonthYear = await $('android=new UiSelector().resourceId("android:id/date_picker_header_date")').getText();
        }

        const dayFormatted = day.toString().padStart(2, '0');
        await waitAndClick($(`android=new UiSelector().description("${dayFormatted} ${targetMonthName} ${year}")`));

        await waitAndClick(this.getSetBtn);
}

async setNumberPickerValue(pickerElement, targetValue) {
    let currentValue = parseInt(await pickerElement.$('android.widget.EditText').getText(), 10);

    while (currentValue !== targetValue) {
        if (targetValue > currentValue) {
            await waitAndClick(pickerElement.$('android.widget.Button[1]'));
        } else {
            await waitAndClick(pickerElement.$('android.widget.Button[0]'));
        }

        await browser.pause(200);
        const newValue = parseInt(await pickerElement.$('android.widget.EditText').getText(), 10);
        if (newValue === currentValue) break;
        currentValue = newValue;
    }
}

verifyFieldsExistInPages(dataTable, pages) {
  for (const [field] of dataTable.raw()) {
    const found = pages.some(page => page.constants && page.constants[field]);
    if (!found) {
      throw new Error(`Field "${field}" not found in any page constants`);
    }
  }
}

}
export default new Page();