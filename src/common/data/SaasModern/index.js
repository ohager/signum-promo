import Process1 from '../../assets/image/saasModern/process-1.svg';
import Process2 from '../../assets/image/saasModern/process-2.svg';
import Process3 from '../../assets/image/saasModern/process-3.svg';

import FeatureIcon1 from '../../assets/image/saasModern/icon-1.png';
import FeatureIcon2 from '../../assets/image/saasModern/icon-2.png';
import FeatureIcon3 from '../../assets/image/saasModern/icon-3.png';
import FeatureIcon4 from '../../assets/image/saasModern/icon-4.png';
import FeatureIcon5 from '../../assets/image/saasModern/icon-5.png';
import FeatureIcon6 from '../../assets/image/saasModern/icon-6.png';

import Screenshot1 from '../../assets/image/saasModern/dash-3.png';
import Screenshot2 from '../../assets/image/saasModern/dash-4.png';

import AuthorOne from '../../assets/image/saasModern/author-1.jpg';
import AuthorTwo from '../../assets/image/saasModern/author-2.jpg';
import AuthorThree from '../../assets/image/saasModern/author-3.jpg';

import { ic_monetization_on } from 'react-icons-kit/md/ic_monetization_on';
import { ic_settings } from 'react-icons-kit/md/ic_settings';
import { pieChart } from 'react-icons-kit/icomoon/pieChart';
import { briefcase } from 'react-icons-kit/fa/briefcase';

export const MENU_ITEMS = [
  // {
  //   label: 'Home',
  //   path: '#banner_section',
  //   offset: '0',
  // },
  // {
  //   label: 'Feature',
  //   path: '#feature_section',
  //   offset: '0',
  // },
  // {
  //   label: 'Pricing',
  //   path: '#pricing_section',
  //   offset: '0',
  // },
  // {
  //   label: 'Testimonial',
  //   path: '#testimonial_section',
  //   offset: '0',
  // },
  // {
  //   label: 'FAQ',
  //   path: '#faq_section',
  //   offset: '0',
  // },
];

export const PROCESS_ITEMS = [
  {
    image: Process1,
    title: <>Install the Phoenix Wallet</>,
    description:
      <>If not already done, install the <a href="https://play.google.com/store/apps/details?id=com.signum.phoenix" target="_blank" rel="noreferrer noopener">Android</a> or <a href="https://phoenix-wallet.rocks" rel="noreferrer noopener">desktop version</a> of the Phoenix Wallet'</>
  },
  {
    image: Process2,
    title: 'Create a free account',
    description:
      <>If you don't have a Signum account yet, create a new account and acquire some Signa at our <a href="https://www.signum.network/exchanges.html" target="_blank" rel="noreferrer noopener">supporting exchanges</a>, or ask for a donation in our <a href="https://discord.gg/9rH2bbCNpe" rel="noreferrer noopener">community</a></>,
  },
  {
    image: Process3,
    title: 'Click Button Or Scan QR Code',
    description:
      'Once you have at least 5.00735 SIGNA come back to this site, enter the magic word(s) and click the green button, or scan the QR Code. This will open your wallet with all necessary data prefilled. Just confirm the transaction and you may win one of the prizes',
  },
];

export const MONTHLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Basic Account',
    description: 'For Small teams or group who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'CREATE FREE ACCOUNT',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Mediums teams or group who need to build website ',
    price: '$9.87',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$12.98',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
];

export const YEARLY_PRICING_TABLE = [
  {
    freePlan: true,
    name: 'Basic Account',
    description: 'For a single client or team who need to build website ',
    price: '$0',
    priceLabel: 'Only for first month',
    buttonLabel: 'CREATE FREE ACCOUNT',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '1,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: 'eCommerce Store ',
      },
      {
        content: '30+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Business Account',
    description: 'For Small teams or group who need to build website ',
    price: '$6.00',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Unlimited secure storage',
      },
      {
        content: '2,000s of Templates Ready',
      },
      {
        content: 'Blog Tools',
      },
      {
        content: '24/7 phone support',
      },
      {
        content: '50+ Webmaster Tools',
      },
    ],
  },
  {
    name: 'Premium Account',
    description: 'For Large teams or group who need to build website ',
    price: '$9.99',
    priceLabel: 'Per month & subscription yearly',
    buttonLabel: 'START FREE TRIAL',
    url: '#',
    listItems: [
      {
        content: 'Drag & Drop Builder',
      },
      {
        content: '3,000s of Templates Ready',
      },
      {
        content: 'Advanced branding',
      },
      {
        content: 'Knowledge base support',
      },
      {
        content: '80+ Webmaster Tools',
      },
    ],
  },
];

export const FAQ_DATA = [
  {
    expend: true,
    title: 'How to contact with Customer Service?',
    description:
      'Our Customer Experience Team is available 7 days a week and we offer 2 ways to get in contact.Email and Chat . We try to reply quickly, so you need not to wait too long for a response!. ',
  },
  {
    title: 'App installation failed, how to update system information?',
    description:
      'Please read the documentation carefully . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum . ',
  },
  {
    title: 'Website reponse taking time, how to improve?',
    description:
      'At first, Please check your internet connection . We also have some online  video tutorials regarding this issue . If the problem remains, Please Open a ticket in the support forum .',
  },
  {
    title: 'New update fixed all bug and issues?',
    description:
      'We are giving the update of this theme continuously . You will receive an email Notification when we push an update. Always try to be updated with us .',
  },
];

export const FOOTER_WIDGET = [
  {
    title: 'Signum Network',
    menuItems: [
      {
        url: 'https://www.signum.network/',
        text: 'Home',
      },
      {
        url: 'https://www.signum.network/privacypolicy.html',
        text: 'Privacy Policy',
      },
      {
        url: 'https://www.signum.network/disclaimer.html',
        text: 'Disclaimer',
      },
    ],
  },
  {
    title: 'Community',
    menuItems: [
      {
        url: 'https://discord.gg/QHZkF4KHDS',
        text: 'Discord',
      },
      {
        url: 'https://t.me/signumnetwork',
        text: 'Telegram',
      },
      {
        url: 'https://twitter.com/signum_official',
        text: 'Twitter',
      },
    ],
  }
];

export const FEATURES = [
  {
    icon: FeatureIcon1,
    title: 'Solve the challenge',
    description:
      'Follow the breadcrumbs given in the Discord Channel and try to get the magic word(s)',
  },
  {
    icon: FeatureIcon3,
    title: 'Send your solution',
    description:
      'If you think you got the magic word(s), enter it/them in the upper text field and click the button or scan the QR Code',
  },
  {
    icon: FeatureIcon2,
    title: '10 Winners Award',
    description:
      'The overall prices are 5000 SIGNA. The first ten correct solutions will get the prices with a distribution of 40%, 25%, 15% and 7x 3%.',
  },
  // {
  //   icon: FeatureIcon5,
  //   title: 'UX Planning',
  //   description:
  //     'Get your proof tests delivered home collect a sample from the news get design.',
  // },
  {
    icon: FeatureIcon6,
    title: 'Revelation',
    description:
      <>During the meetup, on December 18, 4pm UTC, we will end the puzzle, by sending a signal to the Smart Contract. The <a href="https://chain.signum.network/address/9325459780269952280" target="_blank" rel="noreferrer noopener">creators account</a> will reveal its passphrase such that all can verify the correct magic word(s)</>,
  },
  {
    icon: FeatureIcon4,
    title: 'SNA Donation',
    description:
      <>The Smart Contract will accumulate funds during the participation. After all prices were paid, remaining funds will be sent to the <a href="https://chain.signum.network/address/8952122635653861124" target="_blank" rel="noreferrer noopener">SNA</a></>
  },
];

export const SCREENSHOTS = [
  {
    icon: ic_monetization_on,
    title: 'Budget Overview',
    image: Screenshot2,
  },
  {
    icon: ic_settings,
    title: 'Create & Adjust',
    image: Screenshot1,
  },
  {
    icon: pieChart,
    title: 'View Reports',
    image: Screenshot2,
  },
  {
    icon: briefcase,
    title: 'Integrations',
    image: Screenshot1,
  },
];

export const TESTIMONIALS = [
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jon Doe',
    designation: 'CEO of Dell Co.',
    avatar: AuthorOne,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor incididunt labore dolore features Lorem ipsum dolor sit amet consectetur.',
    name: 'Jon Doe',
    designation: 'Co Founder of IBM',
    avatar: AuthorTwo,
  },
  {
    title: 'Modern look & trending design',
    review:
      'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.',
    name: 'Jeny Doe',
    designation: 'Manager of Hp co.',
    avatar: AuthorThree,
  },
];
