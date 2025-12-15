'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ContactForm() {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const sendEmail = (e) => {
        e.preventDefault();

        // Honeypot check for bot protection
        if (form.current.website.value) {
            setStatus('error');
            return;
        }

        // Basic spam validation
        const name = form.current.user_name.value.trim();
        if (name.length < 2) {
            setStatus('error');
            return;
        }

        setStatus('loading');

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <div className="bg-[#2D2E30] p-8 rounded-2xl border border-white/5 h-fit">
            <h3 className="text-2xl font-bold text-white mb-6">Napisz do nas</h3>

            {status === 'success' ? (
                <div className="bg-[#44AF33]/10 border border-[#44AF33] rounded-xl p-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-[#44AF33]/20 rounded-full flex items-center justify-center mx-auto text-[#44AF33]">
                        <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-white">Wiadomość wysłana!</h4>
                    <p className="text-gray-300">
                        Dziękujemy za kontakt. Odpiszemy najszybciej jak to możliwe.
                    </p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="text-[#44AF33] font-bold text-sm hover:underline"
                    >
                        Wyślij kolejną wiadomość
                    </button>
                </div>
            ) : (
                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <input
                                type="text"
                                name="user_name"
                                placeholder="Imię"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#44AF33] transition-colors"
                            />
                        </div>
                        <div className="space-y-1">
                            <input
                                type="text"
                                name="user_phone"
                                placeholder="Telefon"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#44AF33] transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <input
                            type="email"
                            name="user_email"
                            placeholder="Email (opcjonalnie)"
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#44AF33] transition-colors"
                        />
                    </div>

                    <div className="space-y-1">
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Treść wiadomości / Lokalizacja / Metraż"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#44AF33] transition-colors"
                        ></textarea>
                    </div>

                    {/* Honeypot field for bot protection */}
                    <div style={{ display: 'none' }}>
                        <input
                            type="text"
                            name="website"
                            tabIndex="-1"
                            autoComplete="off"
                        />
                    </div>

                    {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 p-3 rounded-lg border border-red-500/20">
                            <AlertCircle size={16} />
                            Wystąpił błąd. Spróbuj ponownie lub zadzwoń.
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full bg-[#44AF33] hover:bg-[#38942b] text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-[#44AF33]/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? (
                            'Wysyłanie...'
                        ) : (
                            <>Wyślij Wiadomość <Send size={18} /></>
                        )}
                    </button>
                    <p className="text-xs text-gray-500 text-center pt-2">
                        Wysyłając formularz zgadzasz się na kontakt zwrotny.
                    </p>
                </form>
            )}
        </div>
    );
}
