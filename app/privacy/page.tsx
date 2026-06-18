import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Airavatl Partner App — Privacy Policy",
  description:
    "Privacy Policy for the Airavatl Partner mobile application. How BSP Sparton Private Limited collects, uses, shares, and protects personal data of Pilots, Transporters, and Employee Drivers, in compliance with the DPDP Act, 2023.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen text-slate-700">
      <header className="pt-32 pb-12 text-center bg-gradient-to-br from-violet-50 via-white to-violet-100 border-b border-violet-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.2em] text-violet-700 mb-3 font-semibold">Airavatl Partner</div>
          <h1 className="text-4xl md:text-5xl font-light text-slate-900">
            Privacy <span className="font-medium text-violet-900">Policy</span>
          </h1>
          <p className="mt-4 text-slate-600">
            For Pilots, Transporters, and Employee Drivers using the Airavatl Partner mobile application.
          </p>
          <p className="mt-3 text-sm text-slate-500">Effective Date: 20 April 2026 &nbsp;|&nbsp; Version 1.3</p>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 py-16 prose-policy">
        <Link href="/" className="text-sm text-violet-700 hover:text-violet-900">&larr; Back to home</Link>

        <Callout>
          <strong className="text-violet-900">AT A GLANCE:</strong> This Privacy Policy explains what personal data
          BSP Sparton Private Limited collects when you use the Airavatl Partner App, why we collect it, who we
          share it with, and what rights you have under Indian law. In short: we collect phone number, KYC documents,
          vehicle and banking details, trip and location data, and app-usage information to run the marketplace,
          process payments, verify identity, and keep our users safe. We do not sell your personal data to advertisers.
          You have the right to access, correct, delete your account, and withdraw consent at any time. To request
          account deletion, email <ExtLink href="mailto:airavatlogistic@gmail.com">airavatlogistic@gmail.com</ExtLink>{" "}
          (see Section 9.3). For all other privacy concerns, contact our Grievance Officer at{" "}
          <ExtLink href="mailto:admin.airavatl@bspsparton.in">admin.airavatl@bspsparton.in</ExtLink>.
        </Callout>

        <TOC />

        <H2 id="s1">1. Introduction</H2>
        <H3>1.1 Who we are</H3>
        <P>
          This Privacy Policy (the &ldquo;Policy&rdquo;) is issued by <strong className="text-slate-900">BSP Sparton Private Limited</strong>,
          a company incorporated under the Companies Act, 2013 (CIN: U62020AS2024PTC026345), having its registered office at
          1B, 1st Floor, Saroj Estate, K.C. Patowary Road, Ulubari, Guwahati 781007, Assam, India (&ldquo;BSP Sparton&rdquo;,
          &ldquo;Airavatl&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;). Airavatl is the operator of the
          Airavatl Partner mobile application (the &ldquo;Partner App&rdquo;).
        </P>
        <H3>1.2 Scope of this Policy</H3>
        <P>
          This Policy applies to personal data we collect when you (a) download, install, or use the Partner App;
          (b) register as a Pilot, Transporter, or Employee Driver (each a &ldquo;Partner&rdquo;); (c) interact with
          Airavatl support channels; or (d) otherwise engage with our services. This Policy does not apply to the Airavatl
          Consignor application, which is governed by a separate privacy policy.
        </P>
        <H3>1.3 Our role under the DPDP Act, 2023</H3>
        <P>
          For the purposes of the Digital Personal Data Protection Act, 2023 (the &ldquo;DPDP Act&rdquo;), BSP Sparton
          Private Limited is the Data Fiduciary in respect of the personal data processed through the Partner App. You,
          as a Partner, are the Data Principal whose rights are protected under the DPDP Act and this Policy. Where we
          engage third-party service providers to process data on our behalf, they act as Data Processors and are bound
          by contractual and technical safeguards described in this Policy.
        </P>
        <H3>1.4 Acceptance of this Policy</H3>
        <P>
          By installing, registering on, or using the Partner App, you confirm that you have read and understood this
          Policy and consent to the collection, use, storage, sharing, and other processing of your personal data as
          described below. Your consent is also recorded electronically when you accept the Terms of Service at sign-up.
          If you do not agree, please do not use the Partner App.
        </P>
        <H3>1.5 Relationship with other documents</H3>
        <P>
          This Policy forms an integral part of the Airavatl Partner App Terms of Service (the &ldquo;Terms&rdquo;).
          Capitalised terms used but not defined in this Policy have the meanings given to them in the Terms. In case of
          any inconsistency between this Policy and the Terms concerning the processing of personal data, this Policy
          shall prevail.
        </P>
        <H3>1.6 Updates to this Policy</H3>
        <P>
          We may update this Policy from time to time to reflect changes in our practices, in applicable law, or in the
          services we provide. Material changes will be notified to you through the Partner App, by push notification, by
          SMS, or by email to the contact details registered with your Account, at least seven (7) days before they take
          effect. Your continued use of the Partner App after the effective date of the revised Policy constitutes
          acceptance of the revised Policy. Where the DPDP Act requires fresh consent for a material change, we will
          obtain it before processing your personal data for the new purpose.
        </P>

        <H2 id="s2">2. Definitions</H2>
        <UL>
          <li><strong className="text-slate-900">&ldquo;Consent&rdquo;</strong> &mdash; free, specific, informed, unconditional, and unambiguous agreement provided by you in respect of a specific processing purpose, as required by Section 6 of the DPDP Act.</li>
          <li><strong className="text-slate-900">&ldquo;Data Fiduciary&rdquo;</strong> &mdash; the person who determines the purpose and means of processing personal data &mdash; in this case, BSP Sparton Private Limited.</li>
          <li><strong className="text-slate-900">&ldquo;Data Principal&rdquo;</strong> &mdash; the individual to whom personal data relates &mdash; in this case, you as a Partner.</li>
          <li><strong className="text-slate-900">&ldquo;Data Processor&rdquo;</strong> &mdash; a person who processes personal data on behalf of a Data Fiduciary.</li>
          <li><strong className="text-slate-900">&ldquo;DPDP Act&rdquo;</strong> &mdash; the Digital Personal Data Protection Act, 2023, together with the rules, regulations, and notifications issued thereunder from time to time.</li>
          <li><strong className="text-slate-900">&ldquo;Personal Data&rdquo;</strong> &mdash; any data about an individual who is identifiable by or in relation to such data.</li>
          <li><strong className="text-slate-900">&ldquo;Processing&rdquo;</strong> &mdash; any operation performed on personal data, including collection, recording, organisation, storage, use, sharing, disclosure, erasure, or destruction, whether by automated or other means.</li>
          <li><strong className="text-slate-900">&ldquo;Sensitive Personal Data&rdquo;</strong> &mdash; personal data that reveals financial information, passwords, biometric identifiers, or any other category treated as sensitive under applicable law.</li>
          <li><strong className="text-slate-900">&ldquo;Services&rdquo;</strong> &mdash; the marketplace services provided through the Partner App as described in the Terms.</li>
        </UL>

        <H2 id="s3">3. Personal data we collect</H2>
        <P>We collect only the personal data that is necessary for the purposes described in Section 4.</P>

        <H3>3.1 Data you provide directly</H3>
        <H4>3.1.1 Account and contact data</H4>
        <UL>
          <li>Full name</li>
          <li>Indian mobile number (+91) used for sign-up and OTP verification</li>
          <li>Email address, where provided</li>
          <li>Residential or business address</li>
          <li>Role (Pilot, Transporter, or Employee Driver) and, for Employee Drivers, the inviting Transporter&rsquo;s reference</li>
        </UL>
        <H4>3.1.2 Identity and KYC data</H4>
        <UL>
          <li>Aadhaar number and copy of Aadhaar card (collected for identity verification as permitted under applicable law)</li>
          <li>Permanent Account Number (PAN) and copy of PAN card</li>
          <li>Commercial Driving Licence number, issuing authority, expiry date, and copy of the licence (for Pilots and Employee Drivers)</li>
          <li>For Transporters: business name, type of entity, business registration or MSME certificate, GST registration certificate (where applicable), and identity/PAN of the authorised signatory</li>
          <li>Photograph of the Partner, where captured during onboarding or KYC</li>
        </UL>
        <H4>3.1.3 Vehicle data</H4>
        <UL>
          <li>Vehicle registration number and Vehicle Registration Certificate (RC)</li>
          <li>Vehicle type, sub-type, body type, capacity, and dimensions</li>
          <li>Insurance certificate, fitness certificate, Pollution Under Control (PUC) certificate, and statutory permits</li>
        </UL>
        <H4>3.1.4 Banking and payout data</H4>
        <UL>
          <li>Bank account number, IFSC code, account holder name, bank name</li>
          <li>UPI Virtual Payment Address (VPA), where UPI payout is chosen</li>
          <li>Penny-drop or UPI handle verification responses received from our Payment Processor</li>
        </UL>
        <H4>3.1.5 Communications and content</H4>
        <UL>
          <li>Messages, voice recordings (where applicable), and support tickets submitted through the Partner App, WhatsApp, email, or phone</li>
          <li>Ratings, reviews, and comments about Consignors</li>
          <li>Photographs and documents uploaded as Loading Proof, Proof of Delivery (POD), or Cargo Incident evidence</li>
        </UL>

        <H3>3.2 Data we collect automatically from your use of the Partner App</H3>
        <H4>3.2.1 Device and technical data</H4>
        <UL>
          <li>Device identifier, device model, operating system and version</li>
          <li>Network information (mobile network operator, approximate connection type)</li>
          <li>App version, language and regional settings, time-zone</li>
          <li>Push notification tokens issued by the push-notification services of your mobile platform</li>
        </UL>
        <H4>3.2.2 Location data</H4>
        <P>With your express consent and only during active Trips, we collect:</P>
        <UL>
          <li><strong className="text-slate-900">Foreground location</strong> (latitude, longitude, accuracy, speed, heading) from the time a Trip is started until it is completed or cancelled</li>
          <li><strong className="text-slate-900">Background location</strong> during in_transit stages, to provide live Trip updates to the Consignor, to compute ETA, and to support geofence-based events</li>
          <li>Location is paused automatically during at_pickup and loading stages to conserve battery and reduce unnecessary capture</li>
        </UL>
        <P>Outside active Trips, the Partner App does not collect location data.</P>
        <H4>3.2.3 Trip and transaction data</H4>
        <UL>
          <li>Auctions viewed, filters applied, Bids placed, Bids won, Trips accepted, declined, or withdrawn</li>
          <li>Trip status transitions (with timestamps), OTP verification events, upload events, payment events</li>
          <li>Earnings ledger, payout history, chargebacks, and mediation records</li>
        </UL>
        <H4>3.2.4 Log and diagnostic data</H4>
        <UL>
          <li>Server-side and client-side logs generated when you interact with the Partner App, including request timestamps, IP address, crash stack-traces, error codes, and performance metrics</li>
          <li>Automated analytics on how the Partner App is used (for example, screen flows, feature adoption, and funnel completion rates)</li>
        </UL>
        <Callout>
          <strong className="text-violet-900">NOTE ON FUTURE TOOLS:</strong> The Partner App may, in future, use additional third-party tools for crash reporting, performance monitoring, or usage analytics. Where we introduce such tools, they will process the data described in Section 3.2.4 on our behalf, bound by data-processing agreements consistent with this Policy. We will update the list of processors in Section 7 and, where required, seek fresh consent.
        </Callout>

        <H3>3.3 Data we receive from third parties</H3>
        <UL>
          <li>OTP delivery confirmations and verification status from our SMS aggregator</li>
          <li>KYC verification results from authorised verification agencies where engaged</li>
          <li>Payment status, UPI handle verification, bank account penny-drop results, and chargeback notifications from our Payment Processor</li>
          <li>Navigation, map, and place-lookup responses from mapping service providers</li>
          <li>Referrals or invitations from Transporters inviting Employee Drivers to join</li>
        </UL>

        <H3>3.4 Data we do not collect</H3>
        <P>To set clear expectations, the Partner App does not:</P>
        <UL>
          <li>collect sensitive categories such as caste, religion, political opinions, sexual orientation, health records, or biometric data (other than photographs of the Partner used for identity verification);</li>
          <li>access your contact list, SMS inbox, call log, photo gallery, or microphone, except when you deliberately use a feature that requires it (for example, selecting a photo for Loading Proof activates photo-picker access for that action only);</li>
          <li>sell or rent your personal data to advertisers or data brokers;</li>
          <li>use your personal data to build or train generalised machine-learning models for third parties.</li>
        </UL>

        <H2 id="s4">4. How and why we use your data</H2>
        <P>
          We process personal data for the purposes set out in this Section 4. For each purpose, we identify the legal
          basis under Section 7 of the DPDP Act (consent or legitimate use). You have the right to withdraw consent at
          any time in respect of purposes that rely on consent, subject to Section 9.4 below.
        </P>
        <Table headers={["Purpose", "Data used", "Legal basis (DPDP)"]} rows={[
          ["Account creation, OTP verification, role assignment, and onboarding", "Mobile number, name, role selection, OTP confirmations", "Consent"],
          ["KYC verification and document validation", "Aadhaar, PAN, driving licence, RC, insurance, GST, business registration, photographs", "Consent + legitimate use (compliance with laws incl. PMLA, MV Act)"],
          ["Operation of the marketplace (Auctions, Bids, Trip matching, status updates)", "Account data, vehicle data, trip events, communications", "Performance of Terms (legitimate use)"],
          ["Live Trip tracking, ETA, and geofence events", "Location data (foreground + background) during active Trips", "Consent"],
          ["Processing payments, advances, final payments, detention charges, and payouts", "Banking / UPI data, transaction data, Payment Processor responses", "Performance of Terms + legal compliance"],
          ["Safety, fraud prevention, anti-abuse, and security", "Device and log data, location data, transaction patterns, uploaded media", "Legitimate use (safety of Data Principals + Data Fiduciary)"],
          ["Customer support, mediation of disputes, Cargo Incident investigation", "All data relevant to the issue, including communications and Trip logs", "Performance of Terms"],
          ["Regulatory, tax, legal, and audit compliance", "KYC and transaction data, communications, records of consent", "Legal obligation"],
          ["Service improvement, product analytics, and error diagnostics", "Usage events, crash logs, performance metrics (de-identified where feasible)", "Consent"],
          ["Transactional communications (SMS, push, in-app, email)", "Contact data, Trip data", "Performance of Terms"],
          ["Marketing and promotional communications about Airavatl services", "Contact data, role, approximate location", "Consent (you may opt out at any time)"],
        ]} />
        <P>
          We do not use your personal data for purposes materially different from those listed above without first
          obtaining fresh consent, except where such processing is required or permitted by law.
        </P>

        <H2 id="s5">5. Consent and how to withdraw it</H2>
        <H3>5.1 How we obtain consent</H3>
        <UL>
          <li>At sign-up, through a consent checkbox accompanying the Terms of Service and this Policy;</li>
          <li>When you grant permission to the Partner App to access location (foreground and background), camera, photo library, and notifications &mdash; through the operating system&rsquo;s permission dialogs;</li>
          <li>At specific points in the user interface where a new purpose requires fresh consent (for example, marketing preferences);</li>
          <li>For KYC and payout verification, through an explicit consent action before documents are collected and shared with the relevant verifier or Payment Processor.</li>
        </UL>
        <H3>5.2 The itemised notice</H3>
        <P>
          In line with Section 5 of the DPDP Act, we provide you an itemised notice at or before the time consent is
          sought, describing (a) the personal data we intend to collect; (b) the purpose of processing; (c) the manner
          in which you may exercise your rights; and (d) the manner in which you may make a complaint. This Policy,
          together with the in-app consent prompts, constitutes that notice.
        </P>
        <H3>5.3 How to withdraw consent</H3>
        <UL>
          <li>through the in-app settings where available;</li>
          <li>by modifying your device&rsquo;s operating-system permissions for the Partner App (for example, disabling background location);</li>
          <li>by emailing our Grievance Officer at <ExtLink href="mailto:admin.airavatl@bspsparton.in">admin.airavatl@bspsparton.in</ExtLink> with the subject line &ldquo;Withdrawal of Consent&rdquo;, specifying the purpose for which consent is being withdrawn.</li>
        </UL>
        <H3>5.4 Consequences of withdrawal</H3>
        <UL>
          <li>Revoking consent for KYC data will prevent account activation or continuation.</li>
          <li>Revoking consent for location tracking during Trips will prevent the Partner App from matching you with Consignors for real-time-tracked Trips, will trigger persistent warning banners, and may over time result in reduced Bid visibility as described in the Terms.</li>
          <li>Revoking consent for banking data will prevent us from disbursing payouts.</li>
        </UL>
        <P>
          Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal, or processing
          that continues under a different lawful basis (for example, records we are required by law to retain).
        </P>
        <H3>5.5 Consent Manager under the DPDP Act</H3>
        <P>
          Once Consent Managers are operationalised and registered with the Data Protection Board of India under Section
          6(7) of the DPDP Act, you will be able to give, manage, review, and withdraw your consent through an
          interoperable Consent Manager of your choice. We will update this Policy and the Partner App when such
          functionality becomes available.
        </P>

        <H2 id="s6">6. How we share your data</H2>
        <H3>6.1 Our general principle</H3>
        <P>
          We share personal data only where necessary for the purposes described in Section 4, only with recipients
          bound by appropriate obligations of confidentiality and security, and only to the extent necessary.
        </P>
        <H3>6.2 With Consignors and other marketplace participants</H3>
        <UL>
          <li>your name (or, for Transporters, the business name)</li>
          <li>your masked or callable mobile number, during the active Trip window</li>
          <li>your vehicle type, registration number, and live location during the Trip</li>
          <li>Loading Proof and POD photographs, rating, and average star score</li>
        </UL>
        <P>
          Data is shared with the Consignor only for trips on which they are a counter-party. Consignors do not have
          access to your KYC documents, banking details, or broader profile data.
        </P>
        <H3>6.3 With Transporters (for Employee Drivers)</H3>
        <UL>
          <li>your name and mobile number</li>
          <li>your driving licence details and verification status</li>
          <li>the Trips assigned to you, with status, route, and earnings information</li>
          <li>your ratings and Trip history within that Transporter&rsquo;s fleet</li>
        </UL>
        <P>We do not share your Aadhaar, PAN, or other identity documents with the Transporter.</P>

        <H3>6.4 With Data Processors</H3>
        <Table headers={["Processor category", "Identification", "Data shared / purpose"]} rows={[
          ["Cloud database & hosting", "A cloud database and application-hosting provider", "Account, trip, transaction, and supporting data / hosting & operations"],
          ["Cloud media storage", "A cloud object-storage provider", "Loading Proof, POD, uploaded documents / secure storage with 90-day retention"],
          ["Payment Aggregator", "Razorpay, an RBI-authorised Payment Aggregator, and its affiliates (incl. payout orchestration)", "Name, mobile, bank/UPI, transaction amounts / payments collection and payout"],
          ["SMS / OTP delivery", "A DLT-registered SMS and OTP delivery aggregator operating in India", "Mobile number, OTP / delivering OTP and transactional SMS"],
          ["Push notification service", "Push-notification services operated by Android and iOS platform providers", "Device push tokens / delivering notifications to your device"],
          ["Mapping & routing services", "A mapping, routing, and places-lookup service provider", "Approximate or precise coordinates, place identifiers / routing and ETA"],
          ["KYC verification agencies", "Authorised identity and document-verification agencies, where engaged", "Aadhaar / PAN / bank details / verification of identity & accounts"],
          ["Diagnostic & analytics tools", "Crash, error, and product-usage analytics tools (current or future)", "Device, app, and interaction metadata / service reliability and improvement"],
        ]} />

        <H3>6.5 With legal, regulatory, and law-enforcement authorities</H3>
        <UL>
          <li>to comply with a subpoena, court order, notice, or other legal process</li>
          <li>to respond to a lawful request from law-enforcement, tax, or regulatory authorities (including in connection with Cargo Incident investigations)</li>
          <li>to enforce our Terms or protect our rights, property, or safety, or the rights, property, or safety of our users or the public</li>
          <li>in connection with a prospective or actual merger, acquisition, reorganisation, financing, or sale of all or substantially all of our business or assets</li>
        </UL>
        <H3>6.6 With Employee Drivers&rsquo; transporters, and vice versa</H3>
        <P>
          Within a Transporter&rsquo;s fleet, Transporter administrators have visibility of Employee Driver trip activity
          and performance as described in Section 6.3. Employee Drivers do not have visibility of other Employee Drivers&rsquo;
          personal data.
        </P>
        <H3>6.7 No sale of data</H3>
        <P>
          We do not sell, rent, or trade your personal data to advertisers or data brokers for monetary or other valuable
          consideration. Operational sharing with Processors and partners described above is not a sale.
        </P>

        <H2 id="s7">7. Storage, security, and cross-border transfer</H2>
        <H3>7.1 Where your data is stored</H3>
        <P>
          Personal data is stored primarily on cloud infrastructure located in India. Some supporting media may be
          stored on globally-distributed infrastructure operated by our Processors. All storage is access-controlled
          and protected by industry-standard technical safeguards including encryption in transit, encryption at rest
          for supported categories, role-based access control, and network segmentation.
        </P>
        <H3>7.2 Cross-border transfer</H3>
        <P>
          Where any personal data is transferred outside India to a Processor operating from another jurisdiction, such
          transfer is made in accordance with Section 16 of the DPDP Act. We do not transfer personal data to any country
          or territory notified as restricted by the Central Government from time to time.
        </P>
        <H3>7.3 Security measures</H3>
        <UL>
          <li>Transport-layer encryption (TLS) for all client-server and server-server communications</li>
          <li>Role-based access controls enforced at the database level</li>
          <li>Presigned, time-limited URLs for media uploads and retrievals</li>
          <li>Restricted back-office access on a need-to-know basis</li>
          <li>Audit logging of administrative actions</li>
          <li>Secret-management practices that prevent credentials from being exposed in client applications</li>
          <li>Device-level controls including OTP-only authentication and rate-limiting on OTP requests</li>
          <li>Anti-fraud safeguards including detection of mock locations, rooted or jail-broken devices, and multi-account abuse</li>
        </UL>
        <P>
          Despite these measures, no system of electronic transmission or storage is entirely secure. We encourage you
          to use strong device-level protections to protect access to your Account.
        </P>
        <H3>7.4 Personal data breach notification</H3>
        <P>
          In the event of a personal-data breach affecting your data, we will, as required by Section 8(6) of the DPDP
          Act, notify the Data Protection Board of India and each affected Data Principal in the manner and within the
          time specified by the applicable rules.
        </P>

        <H2 id="s8">8. How long we keep your data</H2>
        <H3>8.1 Retention principle</H3>
        <P>
          We retain your personal data only for as long as necessary to fulfil the purposes described in Section 4,
          including to comply with our legal, regulatory, tax, and record-keeping obligations, and to establish, exercise,
          or defend legal claims. When the retention period lapses, we either delete your data or, where deletion is not
          feasible, irreversibly anonymise it.
        </P>
        <H3>8.2 Indicative retention periods</H3>
        <Table headers={["Category", "Retention period", "Why"]} rows={[
          ["Loading Proof, POD, and other Trip media", "90 days from upload", "Dispute window and routine operations"],
          ["Cargo Incident media and records", "Duration of mediation / investigation + 3 years thereafter", "Legal and evidentiary needs"],
          ["Account KYC records", "Duration of the Account + 5 years after closure", "PMLA and tax record-keeping"],
          ["Transaction and payout records", "8 years from the financial year of transaction", "Income Tax Act & GST record-keeping"],
          ["Location data", "Up to 180 days from Trip completion", "Dispute support and safety investigations"],
          ["Log and diagnostic data", "Up to 365 days", "Service reliability and incident investigation"],
          ["Support tickets and communications", "3 years from closure", "Quality assurance, legal defence"],
          ["Records of consent and withdrawal", "Duration of the Account + 3 years", "DPDP compliance"],
        ]} />
        <H3>8.3 Deletion on Account closure</H3>
        <P>
          If you close your Account by written request sent to{" "}
          <ExtLink href="mailto:airavatlogistic@gmail.com">airavatlogistic@gmail.com</ExtLink>, we will erase or
          anonymise your personal data within ninety (90) days of the request, subject to legally-mandated retention
          categories described above.
        </P>

        <H2 id="s9">9. Your rights as a Data Principal</H2>
        <H3>9.1 Right to information</H3>
        <P>
          You have the right to obtain from us a summary of the personal data about you that is being processed and the
          processing activities, together with the identities of all other Data Fiduciaries and Data Processors with
          whom the data has been shared, and a description of the data shared.
        </P>
        <H3>9.2 Right to correction, completion, and updating</H3>
        <P>
          You have the right to request correction of inaccurate or misleading personal data, completion of incomplete
          personal data, and updating of outdated personal data.
        </P>
        <H3>9.3 Right to erasure and account deletion</H3>
        <P>
          You have the right to request erasure of your personal data and deletion of your Account at any time, subject
          to the retention categories described in Section 8.2.
        </P>
        <H4>9.3.1 How to request account deletion</H4>
        <P>
          To request deletion of your Account and associated personal data, send an email to{" "}
          <ExtLink href="mailto:airavatlogistic@gmail.com">airavatlogistic@gmail.com</ExtLink> with the following details:
        </P>
        <UL>
          <li>Subject line: &ldquo;Request for Account Deletion &mdash; [Your Registered Mobile Number]&rdquo;</li>
          <li>the mobile number and name registered with your Account;</li>
          <li>your role on the Partner App (Pilot / Transporter / Employee Driver);</li>
          <li>a brief reason for the deletion request;</li>
          <li>any additional information we may reasonably request to verify your identity and prevent unauthorised deletion of another person&rsquo;s account.</li>
        </UL>
        <H4>9.3.2 What happens after you submit a request</H4>
        <UL>
          <li>We will acknowledge your request within forty-eight (48) hours of receipt.</li>
          <li>We may ask you to confirm the request from your registered mobile number (for example, by a confirmation OTP).</li>
          <li>If you have any active Trips, pending payouts, outstanding chargebacks, open Cargo Incident mediations, or unresolved disputes, deletion may be deferred until they are resolved.</li>
          <li>Once verified and cleared, we will erase or irreversibly anonymise your personal data within ninety (90) days, except for data we are legally required to retain.</li>
          <li>We will send you a confirmation email once deletion is complete.</li>
        </UL>
        <H4>9.3.3 Consequences of account deletion</H4>
        <UL>
          <li>you will lose access to the Partner App, your Trip history, ratings, and earnings ledger;</li>
          <li>you will not be able to restore your Account; if you wish to use the Partner App again, you must register afresh and complete KYC again;</li>
          <li>any pending payouts that have not been withdrawn may be forfeited, unless you arrange settlement with Airavatl Support prior to deletion;</li>
          <li>legally-retained records (per Section 8.2) will not be part of your re-registered Account but may be referenced if fraud, dispute, or regulatory matters arise.</li>
        </UL>
        <H4>9.3.4 Where to track account deletion</H4>
        <P>
          For the latest instructions and to initiate a deletion request, you may also visit the{" "}
          <Link className="text-violet-900 hover:underline" href="/delete-account">account-deletion page</Link>{" "}
          linked from the Airavatl website.
        </P>

        <H3>9.4 Right to withdraw consent</H3>
        <P>
          You have the right to withdraw any previously-given consent at any time, as described in Section 5.3.
          Consequences of withdrawal are described in Section 5.4.
        </P>
        <H3>9.5 Right to grievance redressal</H3>
        <P>
          You have the right to a readily-available means of grievance redressal, described in Section 10. You also have
          the right to escalate unresolved grievances to the Data Protection Board of India in accordance with the DPDP Act.
        </P>
        <H3>9.6 Right to nominate</H3>
        <P>
          You have the right to nominate another individual who, in the event of your death or incapacity, will exercise
          your rights under the DPDP Act in respect of your personal data.
        </P>
        <H3>9.7 How to exercise your rights</H3>
        <P>
          To exercise any of the rights above, please contact our Grievance Officer at{" "}
          <ExtLink href="mailto:admin.airavatl@bspsparton.in">admin.airavatl@bspsparton.in</ExtLink> with a clear
          description of the right you wish to exercise, the Account mobile number or email associated with your
          request, and any information necessary to verify your identity.
        </P>

        <H2 id="s10">10. Grievance redressal and contact</H2>
        <H3>10.1 Grievance Officer</H3>
        <ContactBlock>
          <strong className="text-slate-900">Grievance Officer</strong><br />
          BSP Sparton Private Limited<br />
          1B, 1st Floor, Saroj Estate, K.C. Patowary Road, Ulubari, Guwahati 781007, Assam, India<br />
          Email: <ExtLink href="mailto:admin.airavatl@bspsparton.in">admin.airavatl@bspsparton.in</ExtLink><br />
          Phone: <ExtLink href="tel:+917099220645">+91-7099220645</ExtLink><br />
          Hours: Monday to Saturday, 9:30 AM to 6:30 PM IST (excluding public holidays)
        </ContactBlock>
        <H3>10.2 How to raise a grievance</H3>
        <UL>
          <li>emailing the Grievance Officer at the address above, with a clear description of your concern;</li>
          <li>writing to the postal address above; or</li>
          <li>calling the helpline at +91-7099220645 during working hours.</li>
        </UL>
        <H3>10.3 Our response timelines</H3>
        <P>
          We will acknowledge every privacy-related grievance within forty-eight (48) hours of receipt. We will
          endeavour to resolve grievances within fifteen (15) days of acknowledgment, in line with the timeline
          contemplated by the Information Technology (Intermediary Guidelines) Rules, 2021.
        </P>
        <H3>10.4 Specific timelines for rights-based requests</H3>
        <Table headers={["Request type", "Response / resolution target"]} rows={[
          ["Right to information (summary of processing)", "Within 15 days"],
          ["Right to correction, completion, updating", "Within 7 days for in-app fields; within 15 days for KYC re-verification"],
          ["Right to erasure / Account deletion", "Ack within 48 hours; deletion within 90 days (via airavatlogistic@gmail.com), subject to §8.2"],
          ["Withdrawal of consent", "Within 7 days from receipt, with explanation of consequences"],
          ["Nomination", "Within 15 days"],
        ]} />
        <H3>10.5 Escalation to the Data Protection Board</H3>
        <P>
          If your grievance is not resolved to your satisfaction, you may escalate to the Data Protection Board of India,
          which has been constituted under Chapter V of the DPDP Act. We will cooperate with any investigation conducted
          by the Board.
        </P>

        <H2 id="s11">11. Third-party links and integrations</H2>
        <H3>11.1 External links</H3>
        <P>
          The Partner App may contain links to third-party websites or services. This Policy does not apply to such
          third-party websites or services.
        </P>
        <H3>11.2 Third-party platform privacy</H3>
        <P>
          Where you access the Partner App through app stores (Google Play Store or Apple App Store), the store operator
          may collect separate information governed by its own policies.
        </P>

        <H2 id="s12">12. Age restriction</H2>
        <P>
          The Partner App is intended solely for persons who are at least eighteen (18) years of age. We do not
          knowingly collect personal data from children (persons under 18). If you believe a child&rsquo;s data has been
          submitted to us, please contact the Grievance Officer immediately.
        </P>

        <H2 id="s13">13. Automated decision-making</H2>
        <P>The Partner App uses a limited number of automated rules and ranking signals. Examples include:</P>
        <UL>
          <li>auction-matching filters based on vehicle compatibility and verification status;</li>
          <li>automated blocking of bids or trip assignments where statutory documents have expired;</li>
          <li>automated cool-downs for wrong-OTP attempts and rate limits on OTP requests;</li>
          <li>anti-fraud signals including detection of mock locations and rooted/jail-broken devices.</li>
        </UL>
        <P>
          These controls are rule-based, not predictive profiling, and do not involve solely-automated decisions that
          produce legal or similarly-significant effects on you without the opportunity for human review.
        </P>

        <H2 id="s14">14. Marketing and communications preferences</H2>
        <P>
          Transactional communications &mdash; such as OTPs, trip-request alerts, status updates, payment confirmations,
          KYC reminders, and policy notices &mdash; are sent in connection with the Services and cannot be opted out of
          while your Account is active.
        </P>
        <P>
          Marketing or promotional communications are sent only with your consent. As at the effective date of this
          Policy, Airavatl does not send any marketing or promotional communications to Partners.
        </P>

        <H2 id="s15">15. Employee Drivers and Transporters</H2>
        <H3>15.1 Data of Employee Drivers</H3>
        <P>
          If you are an Employee Driver, your data is processed both by Airavatl (for the operation of the Partner App)
          and by your Transporter. Airavatl&rsquo;s processing of your data is governed by this Policy. Additional
          processing by your Transporter is the Transporter&rsquo;s responsibility.
        </P>
        <H3>15.2 Transporter access and limits</H3>
        <P>
          The Transporter has visibility of your name, mobile number, driving licence details (verification status),
          and Trip-level activity under their fleet. Your Aadhaar, PAN, and other identity-verification documents are
          not shared with the Transporter.
        </P>
        <H3>15.3 Transfer between Transporters</H3>
        <P>
          If you move from one Transporter to another, your Trip and rating history is retained on Airavatl, but
          visibility to the previous Transporter ceases upon removal from their fleet.
        </P>

        <H2 id="s16">16. Contact information</H2>
        <ContactBlock>
          <strong className="text-slate-900">BSP Sparton Private Limited</strong><br />
          CIN: U62020AS2024PTC026345<br />
          1B, 1st Floor, Saroj Estate, K.C. Patowary Road, Ulubari, Guwahati 781007, Assam, India<br />
          Email (Grievance Officer): <ExtLink href="mailto:admin.airavatl@bspsparton.in">admin.airavatl@bspsparton.in</ExtLink><br />
          Phone: <ExtLink href="tel:+917099220645">+91-7099220645</ExtLink>
        </ContactBlock>

        <H2 id="s17">17. Acknowledgment</H2>
        <P>
          By registering on or continuing to use the Partner App, you acknowledge that you have read, understood, and
          agreed to this Privacy Policy.
        </P>

        <hr className="border-violet-100 mt-12" />
        <p className="text-center text-sm text-slate-500 mt-6">&mdash; End of Privacy Policy &mdash;</p>
      </article>
    </main>
  );
}

function H2({ id, children }: { id?: string; children: React.ReactNode }) {
  return <h2 id={id} className="text-2xl font-semibold text-violet-900 mt-12 mb-4 scroll-mt-24">{children}</h2>;
}
function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-2">{children}</h3>;
}
function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="text-base font-semibold text-slate-800 mt-4 mb-1.5">{children}</h4>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-600 leading-relaxed mb-3">{children}</p>;
}
function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc list-outside pl-6 space-y-1 text-slate-600 mb-4">{children}</ul>;
}
function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border border-violet-200 bg-violet-50 px-5 py-4 text-slate-700 leading-relaxed">
      {children}
    </div>
  );
}
function ContactBlock({ children }: { children: React.ReactNode }) {
  return <div className="my-4 rounded-xl border border-violet-200 bg-violet-50 px-5 py-4 text-slate-700 leading-relaxed">{children}</div>;
}
function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} className="text-violet-700 hover:text-violet-900 hover:underline">{children}</a>;
}
function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h} className="border border-violet-200 bg-violet-50 px-3 py-2 text-left text-violet-900 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border border-violet-100 px-3 py-2 align-top text-slate-600">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function TOC() {
  const items = [
    ["s1", "Introduction"],
    ["s2", "Definitions"],
    ["s3", "Personal data we collect"],
    ["s4", "How and why we use your data"],
    ["s5", "Consent and how to withdraw it"],
    ["s6", "How we share your data"],
    ["s7", "Storage, security, and cross-border transfer"],
    ["s8", "How long we keep your data"],
    ["s9", "Your rights as a Data Principal"],
    ["s10", "Grievance redressal and contact"],
    ["s11", "Third-party links and integrations"],
    ["s12", "Age restriction"],
    ["s13", "Automated decision-making"],
    ["s14", "Marketing and communications preferences"],
    ["s15", "Employee Drivers and Transporters"],
    ["s16", "Contact information"],
    ["s17", "Acknowledgment"],
  ];
  return (
    <nav aria-label="Table of contents" className="my-8 rounded-xl border border-violet-200 bg-violet-50 p-5">
      <p className="font-semibold text-violet-900 mb-2">Contents</p>
      <ol className="list-decimal list-outside pl-5 text-slate-700 space-y-1">
        {items.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`} className="hover:text-violet-900">{label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
