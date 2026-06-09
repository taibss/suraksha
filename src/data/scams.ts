export interface Scam {
  id: string;
  category: string;
  targets: string[];
  title: string;
  mugshotVariant: number;
  description: string;
  howItWorks: string;
  redFlags: string[];
  safetyTips: string[];
}

export const SCAMS: Scam[] = [
  {
    id: 'digital-arrest',
    category: 'Digital arrest',
    targets: ['Seniors', 'Young professionals'],
    title: 'The "Digital Arrest" call',
    mugshotVariant: 0,
    description: 'A fake police/CBI officer video-calls, claims you are linked to a crime, and won\'t let you hang up until you pay.',
    howItWorks: 'You get a call (a "courier", "TRAI" or "police") saying a parcel, SIM or account in your name is tied to a crime. You\'re video-called by someone in uniform, told not to disconnect or tell anyone, and pressured to transfer money to a "safe account".',
    redFlags: [
      'A "police/CBI officer" video-calls and forbids you from hanging up or telling family.',
      'You\'re told a parcel, SIM or account in your name is linked to a crime.',
      'You\'re asked to move money to a "safe account" to "verify" it.',
      'Constant urgency, secrecy and threat of immediate arrest.'
    ],
    safetyTips: [
      'No real agency arrests or interrogates anyone over a video call.',
      'Hang up. Call a family member. Verify independently.',
      'Never transfer money to "prove innocence".',
      'Report the number on cybercrime.gov.in.'
    ]
  },
  {
    id: 'upi',
    category: 'UPI & banking',
    targets: ['Young professionals', 'Seniors'],
    title: 'UPI "wrong transfer" trick',
    mugshotVariant: 1,
    description: 'A stranger sends a "collect request" or claims they paid you by mistake and asks you to return it whihc leads to draining your account.',
    howItWorks: 'You get a UPI "request money" notification or a call saying money came to you by error. Approving the request or scanning a QR sends YOUR money out.',
    redFlags: [
      'A "collect request" you didn\'t start.',
      'Being asked to scan a QR or enter UPI PIN to "receive" money.',
      'Pressure to act fast before "the bank reverses it".'
    ],
    safetyTips: [
      'You never need a PIN to RECEIVE money and only to send it.',
      'Decline unknown collect requests.',
      'Verify any "wrong transfer" with your bank directly.'
    ]
  },
  {
    id: 'investment',
    category: 'Investment & trading',
    targets: ['Young professionals'],
    title: 'Guaranteed-return groups',
    mugshotVariant: 2,
    description: 'A WhatsApp "expert" shows fake profits and a slick app, then blocks withdrawals once you\'ve deposited enough.',
    howItWorks: 'You\'re added to a group with screenshots of huge gains and a "mentor". A fake app shows your balance rising until you try to withdraw and are asked for "tax" and "fees".',
    redFlags: [
      'Guaranteed or unusually high "daily returns".',
      'An app or link outside official app stores.',
      'Withdrawal blocked until you pay more "fees".'
    ],
    safetyTips: [
      'Guaranteed returns do not exist.',
      'Use only SEBI-registered intermediaries.',
      'Never download trading apps from chat links.'
    ]
  },
  {
    id: 'job-offer',
    category: 'Job-offer fraud',
    targets: ['Young professionals', 'Women'],
    title: 'Work-from-home "task" jobs',
    mugshotVariant: 3,
    description: 'You\'re paid small amounts for simple tasks, then asked to deposit money for "bigger commissions" which vanish.',
    howItWorks: 'A recruiter offers easy paid tasks. Early small payouts build trust. Then you\'re moved to "prepaid tasks" needing deposits to unlock earnings.',
    redFlags: [
      'Up-front payment to "unlock" tasks or salary.',
      'Recruitment over WhatsApp/Telegram only.',
      'Earnings that require you to deposit first.'
    ],
    safetyTips: [
      'Legitimate jobs never ask you to pay to earn.',
      'Verify the company independently.',
      'Stop the moment a deposit is requested.'
    ]
  },
  {
    id: 'courier',
    category: 'Courier / customs',
    targets: ['Seniors', 'Young professionals'],
    title: '"Parcel in your name" scam',
    mugshotVariant: 0,
    description: 'A caller says a parcel with illegal items was found in your name and routes you to a fake "officer" demanding money.',
    howItWorks: 'A "courier" or "customs" caller claims an illegal parcel is linked to your ID and transfers you to "police" who demand payment to drop the case.',
    redFlags: [
      'A parcel you never sent is "linked to a crime".',
      'Call transferred to "police/customs" demanding money.',
      'Threats of arrest unless you pay now.'
    ],
    safetyTips: [
      'Customs and police don\'t settle cases over the phone.',
      'Disconnect and verify with the real agency.',
      'Never pay to "clear your name".'
    ]
  },
  {
    id: 'voice-clone',
    category: 'AI voice-cloning',
    targets: ['Seniors'],
    title: 'The cloned "relative" call',
    mugshotVariant: 1,
    description: 'An AI-cloned voice of your child or grandchild calls in distress, asking for urgent money.',
    howItWorks: 'Scammers clone a familiar voice from social clips and call claiming an accident or emergency needing instant money.',
    redFlags: [
      'An emotional, urgent call from a "relative" in trouble.',
      'Pressure to send money immediately and quietly.',
      'Caller dodges personal verification questions.'
    ],
    safetyTips: [
      'Hang up and call the person back on their known number.',
      'Agree a family "safe word" for emergencies.',
      'Never act on a single urgent call alone.'
    ]
  },
  {
    id: 'loan-app',
    category: 'Loan-app harassment',
    targets: ['Young professionals'],
    title: 'Predatory instant-loan apps',
    mugshotVariant: 2,
    description: 'A quick-loan app harvests your contacts and photos, then threatens and shames you to extort repayment.',
    howItWorks: 'An app grants a tiny loan with hidden fees, secretly copies your contacts/gallery, then harassers threaten everyone you know.',
    redFlags: [
      'App demands access to contacts, photos, full storage.',
      'Loan far smaller than promised after "fees".',
      'Threatening, abusive recovery messages.'
    ],
    safetyTips: [
      'Use only RBI-regulated lenders.',
      'Deny unnecessary app permissions.',
      'Report harassment. It is a crime; you have rights.'
    ]
  },
  {
    id: 'romance',
    category: 'Matrimonial & romance',
    targets: ['Women', 'Seniors'],
    title: 'Romance & matrimonial fraud',
    mugshotVariant: 3,
    description: 'An online match builds a relationship over weeks, then engineers an emergency or "stuck gift parcel" needing money.',
    howItWorks: 'A charming profile invests time, professes love, then needs money for a crisis, "customs on a gift", or an investment "for your future together".',
    redFlags: [
      'Quick intensity; avoids video calls or meeting.',
      'A money emergency after emotional bonding.',
      '"Gift parcel" stuck in customs needing a fee.'
    ],
    safetyTips: [
      'Never send money to someone you haven\'t met.',
      'Reverse-image-search profile photos.',
      'Talk to a trusted friend before acting.'
    ]
  }
];