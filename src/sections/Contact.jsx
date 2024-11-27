import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import {useTranslation} from "react-i18next";

const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    const {t} = useTranslation();

    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                'service_0rcsnet',
                'template_j7asqpc',
                {
                    from_name: form.name,
                    to_name: 'Han',
                    from_email: form.email,
                    to_email: 'panghanfr@gmail.com',
                    message: form.message,
                },
                'RKBGekSCnwAfbeFfY'
            )

            setLoading(false);

            alert('Your message has been sent !')

            setForm({ name: '', email: '', message: '' });
        } catch (error) {
            setLoading(false);

            console.log(error)

            alert('Something went wrong !')
        }

    }

    return (
        <section className="c-space my-20" id="contact">
            {/* Background Image */}
            <div className="relative min-h-screen flex flex-col items-center justify-center">
                <img src="/assets/terminal.png" alt="terminal bg" className="absolute inset-0 min-h-screen"/>

                <div className="contact-container">
                    <h3 className="head-text mt-4">{t("letsTalk")}</h3>
                    <p className="text-lg text-white-600 mt-3">
                        {t("letsTalkContent")}
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-5 md:mt-12 flex flex-col space-y-2 md:space-y-7">
                        <label className="space-y-1 md:space-y-3">
                            <span className="field-label">{t("fullName")}</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                className="field-input"
                                required
                                placeholder={t("fullNamePlaceholder")}
                            />
                        </label>
                        <label className="space-y-1 md:space-y-3">
                            <span className="field-label">{t("email")}</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="field-input"
                                required
                                placeholder={t("emailPlaceholder")}
                            />
                        </label>
                        <label className="space-y-1 md:space-y-3">
                            <span className="field-label">{t("message")}</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="field-input"
                                required
                                rows={5}
                                placeholder={t("messagePlaceholder")}
                            />
                        </label>

                        <button className="field-btn"
                                type="submit"
                                disabled={loading}
                        >
                            {loading ? t("sending") : t("sendMessage")}
                            <img src="/assets/arrow-up.png" alt="arrow" className={"field-btn_arrow"}/>
                        </button>

                    </form>
                </div>
            </div>

        </section>
    )
}
export default Contact
