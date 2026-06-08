export interface Crook {
  name: string;
  bubble: string;
  description: string;
  variant: number;
}

export const CROOKS: Crook[] = [
  { name: 'Digital-Arrest Dilip', bubble: '1930?! Nahi nahi—!', description: 'Pretended to be CBI. Now actually meeting CBI.', variant: 0 },
  { name: 'UPI Uncle', bubble: 'Arre, sab jaante hain?!', description: 'Sent 1,000 collect requests. Collected one FIR.', variant: 1 },
  { name: 'Investment Bhai', bubble: 'Not fair, yaar!', description: 'Promised 200% returns. Got 100% caught.', variant: 2 },
  { name: 'Loan-App Loocha', bubble: 'Suraksha aa gaya... bhaago!', description: 'Threatened everyone\'s contacts. His one contact now: a lawyer.', variant: 3 },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  variant: number;
  stars: number;
}

export const TESTIMONIALS: Testimonial[] = [
  { quote: 'I almost sent ₹40,000 for a "task job". A Suraksha card my cousin forwarded stopped me just in time.', name: 'Priya, 24', role: 'Marketing exec, Andheri', variant: 0, stars: 5 },
  { quote: 'They had me on a "police" video call for an hour. My son showed me the Suraksha guide — we hung up and reported. The bank froze it.', name: 'Mr. Rao, 67', role: 'Retired teacher, Powai', variant: 1, stars: 5 },
  { quote: 'I felt ashamed to report harassment. A Suraksha Fellow sat with me, no judgement, and helped me file everything.', name: 'Anita, 31', role: 'Nurse, Dadar', variant: 3, stars: 5 },
  { quote: 'As a law student, this is the best training I could ask for — real cases, real people, real impact.', name: 'Kabir', role: 'Suraksha Fellow, GLC Mumbai', variant: 4, stars: 5 },
  { quote: 'A transparent network where I\'m listed neutrally and never asked for a cut. That\'s why I joined.', name: 'Adv. Mehta', role: 'Advocate Panel', variant: 2, stars: 5 },
  { quote: 'Every Sunday I forward the Scam of the Week to our society group. Touchwood, no one\'s been caught since.', name: 'Mrs. D\'Souza', role: 'RWA Secretary, Bandra', variant: 5, stars: 5 },
];

export interface Lawyer {
  name: string;
  area: string;
  languages: string[];
  practice: string;
  variant: number;
}

export const LAWYERS: Lawyer[] = [
  { name: 'Adv. R. Deshpande', area: 'Andheri', languages: ['Marathi', 'Hindi', 'English'], practice: 'Cyber fraud', variant: 0 },
  { name: 'Adv. S. Khan', area: 'Bandra', languages: ['Hindi', 'English'], practice: 'Criminal', variant: 1 },
  { name: 'Adv. M. Iyer', area: 'Dadar', languages: ['Marathi', 'English'], practice: 'Consumer', variant: 2 },
  { name: 'Adv. P. Sharma', area: 'Thane', languages: ['Hindi', 'English'], practice: 'Cyber fraud', variant: 3 },
  { name: 'Adv. A. Fernandes', area: 'Borivali', languages: ['English', 'Hindi'], practice: 'Civil', variant: 4 },
  { name: 'Adv. K. Joshi', area: 'Andheri', languages: ['Marathi', 'Hindi'], practice: 'Consumer', variant: 5 },
  { name: 'Adv. N. Gupta', area: 'Bandra', languages: ['Hindi', 'English'], practice: 'Cyber fraud', variant: 0 },
  { name: 'Adv. V. Patil', area: 'Thane', languages: ['Marathi', 'Hindi', 'English'], practice: 'Criminal', variant: 1 },
];

export interface FeedItem {
  tag: string;
  className: string;
  title: string;
  area: string;
  time: string;
}

export const FEED_ITEMS: FeedItem[] = [
  { tag: 'City desk', className: 'c', title: 'Senior avoids ₹14L loss after spotting fake CBI call', area: 'Powai', time: '2h ago' },
  { tag: 'Cyber cell advisory', className: 't', title: 'Advisory: rise in UPI "collect request" frauds', area: 'Citywide', time: '5h ago' },
  { tag: 'Community report', className: 'a', title: 'Fake "electricity bill" SMS spreading in societies', area: 'Chembur', time: '8h ago' },
  { tag: 'City desk', className: 'c', title: 'Job-task scam group busted; 4 arrested', area: 'Malad', time: '1d ago' },
  { tag: 'Cyber cell advisory', className: 't', title: 'Warning on AI voice-cloning calls to elders', area: 'Citywide', time: '1d ago' },
  { tag: 'Community report', className: 'a', title: 'Loan-app harassment complaints up in Thane', area: 'Thane', time: '2d ago' },
];

export interface Resource {
  type: string;
  className: string;
  title: string;
  description: string;
}

export const RESOURCES: Resource[] = [
  { type: 'Scam of the Week', className: '', title: 'The "Digital Arrest" call', description: 'A one-card explainer for the family group.' },
  { type: 'Video · 75s', className: 'c', title: 'UPI fraud, explained in Marathi', description: 'Why you never share a PIN to receive money.' },
  { type: 'Deep-dive', className: 't', title: 'Investment scams: the full playbook', description: 'How fake trading apps work — and your redressal path.' },
  { type: 'Video · 60s', className: 'c', title: 'AI voice-cloning — protect your parents', description: 'Set a family safe word today.' },
  { type: 'Trend report', className: 'a', title: 'Q1 Mumbai Cyber-Fraud Report', description: 'Patterns, hotspots and the money lost.' },
  { type: 'Scam of the Week', className: '', title: 'Courier "customs" scam', description: 'No parcel makes you a criminal. Here\'s the script.' },
];

export const TICKER_ITEMS = [
  'Senior avoids ₹14L after spotting fake CBI call',
  'UPI "collect request" frauds rising citywide',
  'Job-task scam group busted — 4 arrested',
  'AI voice-clone calls target elderly parents',
  'Loan-app harassment up in Thane',
  '"Electricity bill" SMS spreading in Chembur'
];

export const CHART_DATA = [
  ['Digital arrest', 92],
  ['UPI / banking', 78],
  ['Investment', 64],
  ['Job-offer', 51],
  ['Courier/customs', 39],
  ['Voice-cloning', 28]
];

export interface PromiseType {
  icon: string;
  text: string;
}

export const PROMISES: PromiseType[] = [
  { icon: 'iHelp', text: 'No referral fee, ever' },
  { icon: 'iMoney', text: 'We never sell your data' },
  { icon: 'iHelp', text: 'We list, not recommend' },
  { icon: 'iCitizen', text: 'Your language first' },
  { icon: 'iHelp', text: 'Prevention over alarm' }
];

export const STEPS = [
  'Call 1930 and report the fraud right away',
  'File a complaint on cybercrime.gov.in with evidence',
  'Call your bank to freeze the account & block transfers',
  'Note down all numbers, screenshots & transaction IDs',
  'Lodge an FIR at the local / cyber police station',
  'Tell your family — and warn your community group'
];