function show_bottom_sheet(obj, message, color) {
    obj.show_sheet = true
    obj.message_sheet = message
    obj.color_sheet = color
}

export default class Behaviors {
    redirectTo({ name, params }) {
        this.$router.push({ name: name, params: params });
    }

    validateForm(form, errors) {
        form.setErrors(errors);
    }

    showMessageDialog(data) {
        let icon = data.icon ? data.icon : 'warning'
        let title = data.title ? data.title : 'warning'
        window.Swal.fire({ icon: icon, title: title, html: data.data??data.html })
    }

    showNotification(data) {

        if (data.type == 'toast')
             window.Swal.fire({ icon: data.icon, title: data.title, showConfirmButton: false, position: 'top-end', timer: 1000 })
        else

            window.Swal.fire({ icon: data.icon, title: data.title, html: data.message })
    }

    showMessage(title, message, icon) {
        window.Swal.fire({ title: title, text: message, icon });
    }
    withSuccess(data, group) {
        if (data.event) {
            window.EventBus.fire(group + data.event.name, data.event.data)
        }
        if (data.type == 'notification') this.showNotification(data.notification)
        if (data.type == 'dialog') this.showMessageDialog(data.dialog); //window.Swal.fire({ title: 'warning', text: data.data, icon: 'warning' });
        if (data.type == 'message_bottom_sheet') show_bottom_sheet(this, data.message, data.color);
        if (data.type == 'redirect') this.redirectTo(data.url)


    }
    notSuccess(v,data, form) {
        if (data.type == 'validator') form.setErrors(data.data);
        if (data.type == 'redirect') this.redirectTo(data.data)
        if (data.type == 'notification') this.showNotification(data.data)
        if (data.type == 'autorized') this.redirectTo(401)
        if (data.type == 'message') this.showMessageDialog(data); //window.Swal.fire({ title: 'warning', text: data.data, icon: 'warning' });
        if (data.type == 'message_bottom_sheet') show_bottom_sheet(this, data.data, 'error');
    }
}