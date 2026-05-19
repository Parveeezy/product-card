export class Form {
    constructor(formId) {
        this.form = document.getElementById(formId);
    }

    getValues() {
        const data = {};
        for (const el of this.form.elements) {
            if (el.type === "submit" || el.type === "button") continue;
            const key = el.id || el.name;
            if (key) data[key] = el.value;
        }
        return data;
    }

    isValid() {
        return this.form.checkValidity();
    }

    reset() {
        this.form.reset();
    }
}
