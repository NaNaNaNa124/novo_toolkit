import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.novoswap.finance/contact-us",
      },
      {
        label: "Blog",
        href: "https://novoswap.medium.com/",
      },
      {
        label: "Community",
        href: "https://docs.novoswap.finance/contact-us/telegram",
      },
      {
        label: "CAKE",
        href: "https://docs.novoswap.finance/tokenomics/cake",
      },
      {
        label: "—",
      },
      {
        label: "Online Store",
        href: "https://novoswap.creator-spring.com/",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Customer",
        href: "Support https://docs.novoswap.finance/contact-us/customer-support",
      },
      {
        label: "Troubleshooting",
        href: "https://docs.novoswap.finance/help/troubleshooting",
      },
      {
        label: "Guides",
        href: "https://docs.novoswap.finance/get-started",
      },
    ],
  },
  {
    label: "Developers",
    items: [
      {
        label: "Github",
        href: "https://github.com/novoswap",
      },
      {
        label: "Documentation",
        href: "https://docs.novoswap.finance",
      },
      {
        label: "Bug Bounty",
        href: "https://app.gitbook.com/@novoswap-1/s/novoswap/code/bug-bounty",
      },
      {
        label: "Audits",
        href: "https://docs.novoswap.finance/help/faq#is-novoswap-safe-has-novoswap-been-audited",
      },
      {
        label: "Careers",
        href: "https://docs.novoswap.finance/hiring/become-a-chef",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/novo_network",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    href: "https://t.me/novonetwork",
  },
  {
    label: "Github",
    icon: "Github",
    href: "https://github.com/NovoNetwork",
  },
];
// © 2024 Novo.     Privacy ｜  Policy ｜ T erms of Use
export const privacyLinks = [
  { label: "© 2024 Novo.", href: "" },
  {
    label: "Privacy",
    href: "https://www.novo.network",
  },

  {
    label: "Policy",
    href: "https://www.novo.network",
  },

  {
    label: "Terms of Use ",
    href: "https://www.novo.network",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
