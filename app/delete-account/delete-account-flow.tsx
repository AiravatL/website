"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, AlertTriangle, Shield, Clock, Mail, Phone, CheckCircle, type LucideIcon } from "lucide-react";

type Consequence = { icon: LucideIcon; title: string; description: string };

const deleteReasons = [
  "No longer need logistics services",
  "Switching to another provider",
  "Privacy concerns",
  "Too expensive",
  "Poor customer service",
  "Technical issues",
  "Other",
];

const consequences: Consequence[] = [
  { icon: Trash2, title: "Account Data Deletion", description: "All your personal information, preferences, and account settings will be permanently deleted." },
  { icon: Clock, title: "Shipment History Loss", description: "You will lose access to all historical shipment data, tracking information, and invoices." },
  { icon: Shield, title: "Active Services Termination", description: "Any ongoing shipments or active services will be cancelled. Outstanding payments must be settled." },
];

export default function DeleteAccountFlow() {
  const [step, setStep] = useState(1);
  const [reason, setReason] = useState("");
  const [confirmText, setConfirmText] = useState("");
  const isConfirmed = confirmText === "DELETE MY ACCOUNT";

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-32 pb-16 bg-gradient-to-br from-violet-50 via-white to-red-50/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <AlertTriangle className="text-red-500" size={48} />
              <h1 className="text-5xl md:text-6xl font-light text-slate-900">
                Delete <span className="text-red-500 font-medium">Account</span>
              </h1>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We&rsquo;re sorry to see you go. Please review the information below before proceeding with account deletion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-violet-50/60">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${step >= n ? "bg-red-500 text-white" : "bg-violet-100 text-violet-700"}`}>
                  {n}
                </div>
                {n < 3 && <div className={`w-16 h-0.5 mx-2 ${step > n ? "bg-red-500" : "bg-violet-200"}`} />}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <span className="text-slate-600 text-sm">
              Step {step} of 3: {step === 1 ? "Review Consequences" : step === 2 ? "Provide Feedback" : "Confirm Deletion"}
            </span>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-slate-900 mb-4">What happens when you delete your account?</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Please review the consequences of account deletion. This action cannot be undone.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {consequences.map((c, index) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-white border border-violet-100 shadow-sm rounded-3xl p-6 text-center"
                  >
                    <div className="w-16 h-16 bg-red-400/10 border border-red-400/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <c.icon className="text-red-400" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{c.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{c.description}</p>
                  </motion.div>
                ))}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-3xl p-8 mb-8">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="text-red-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">Important Notice</h3>
                    <ul className="text-slate-700 space-y-2 text-sm">
                      <li>&bull; Account deletion is permanent and cannot be reversed</li>
                      <li>&bull; You must settle all outstanding payments before deletion</li>
                      <li>&bull; Active shipments will be cancelled and may incur fees</li>
                      <li>&bull; You will lose access to all historical data and documents</li>
                      <li>&bull; Deletion may take up to 30 days to complete</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-slate-900 mb-4">Help us improve</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">Your feedback is valuable to us. Please let us know why you&rsquo;re leaving so we can improve our services.</p>
              </div>

              <div className="bg-white border border-violet-100 shadow-sm rounded-3xl p-8 mb-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">What&rsquo;s your primary reason for leaving?</h3>
                <div className="space-y-3">
                  {deleteReasons.map((r) => (
                    <label key={r} className="flex items-center space-x-3 cursor-pointer">
                      <input type="radio" name="reason" value={r} checked={reason === r} onChange={(e) => setReason(e.target.value)} className="w-4 h-4 text-red-500 bg-white border-violet-300 focus:ring-red-400" />
                      <span className="text-slate-700">{r}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-violet-100 shadow-sm rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Additional feedback (optional)</h3>
                <textarea
                  placeholder="Tell us more about your experience or how we could have served you better..."
                  className="w-full bg-white text-slate-900 placeholder:text-slate-400 p-4 rounded-xl border border-violet-200 focus:border-violet-500 focus:outline-none resize-none"
                  rows={4}
                />
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-slate-900 mb-4">Final confirmation</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">To confirm account deletion, please type &ldquo;DELETE MY ACCOUNT&rdquo; in the field below.</p>
              </div>

              <div className="bg-white border border-violet-100 shadow-sm rounded-3xl p-8 mb-8">
                <label className="block text-slate-900 font-semibold mb-4">Type &ldquo;DELETE MY ACCOUNT&rdquo; to confirm:</label>
                <input
                  type="text"
                  value={confirmText}
                  onChange={(e) => setConfirmText(e.target.value)}
                  placeholder="DELETE MY ACCOUNT"
                  className="w-full bg-white text-slate-900 placeholder:text-slate-400 p-4 rounded-xl border border-violet-200 focus:border-violet-500 focus:outline-none"
                />
                {isConfirmed && (
                  <div className="flex items-center space-x-2 mt-4 text-green-600">
                    <CheckCircle size={16} />
                    <span className="text-sm">Confirmation text matches</span>
                  </div>
                )}
              </div>

              <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
                <div className="text-center">
                  <AlertTriangle className="text-red-500 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-semibold text-slate-900 mb-4">Last chance to reconsider</h3>
                  <p className="text-slate-700 mb-6">
                    Once you click &ldquo;Delete Account&rdquo;, this action cannot be undone. All your data will be
                    permanently removed from our systems.
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="flex justify-between mt-12">
            <div>
              {step > 1 && (
                <motion.button
                  onClick={() => setStep((s) => s - 1)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-violet-300 text-violet-900 bg-white px-8 py-4 rounded-full text-lg font-medium hover:bg-violet-50 transition-colors"
                >
                  Back
                </motion.button>
              )}
            </div>

            <div className="flex space-x-4">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="border border-violet-300 text-violet-900 bg-white px-8 py-4 rounded-full text-lg font-medium hover:bg-violet-50 transition-colors">
                Cancel
              </motion.button>

              {step < 3 ? (
                <motion.button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={step === 2 && !reason}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-full text-lg font-medium transition-colors ${step === 2 && !reason ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-400"}`}
                >
                  Continue
                </motion.button>
              ) : (
                <motion.button
                  disabled={!isConfirmed}
                  whileHover={isConfirmed ? { scale: 1.05 } : {}}
                  whileTap={isConfirmed ? { scale: 0.95 } : {}}
                  className={`px-8 py-4 rounded-full text-lg font-medium transition-colors ${!isConfirmed ? "bg-slate-200 text-slate-400 cursor-not-allowed" : "bg-red-500 text-white hover:bg-red-400"}`}
                >
                  Delete Account
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h3 className="text-3xl font-semibold text-white mb-4">Before you go&hellip;</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">Consider these alternatives that might address your concerns without deleting your account.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="bg-white border border-violet-100 shadow-sm rounded-3xl p-8">
              <h4 className="text-xl font-semibold text-white mb-4">Temporarily deactivate</h4>
              <p className="text-slate-400 mb-6">Take a break without losing your data. You can reactivate your account anytime within 90 days.</p>
              <button className="bg-orange-500 text-white px-6 py-3 rounded-full font-medium hover:bg-orange-400 transition-colors">
                Deactivate Instead
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white border border-violet-100 shadow-sm rounded-3xl p-8">
              <h4 className="text-xl font-semibold text-white mb-4">Talk to our team</h4>
              <p className="text-slate-400 mb-6">Let us help resolve any issues you&rsquo;re experiencing. Our support team is here to help.</p>
              <div className="flex flex-col space-y-3">
                <a href="mailto:support@airavatl.com" className="flex items-center space-x-3 text-orange-400 hover:text-orange-300 transition-colors">
                  <Mail size={16} />
                  <span>support@airavatl.com</span>
                </a>
                <a href="tel:+917099220645" className="flex items-center space-x-3 text-orange-400 hover:text-orange-300 transition-colors">
                  <Phone size={16} />
                  <span>+91-7099220645</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
