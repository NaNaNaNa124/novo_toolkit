import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="148" height="61" viewBox="0 0 148 61" fill="none" {...props}>
      <circle cx="30.0442" cy="30.0442" r="29.6067" fill="#DC0058" stroke="black" strokeWidth="0.875148" />
      <path
        d="M30.5546 9.14114L32.9471 11.8408C33.3597 12.3064 34.0426 12.4184 34.5823 12.109L35.7108 11.4621C36.1716 11.198 36.739 11.562 36.6909 12.091L35.9385 20.3658C35.918 20.5912 35.7291 20.7638 35.5028 20.7638H24.5863C24.3599 20.7638 24.171 20.5912 24.1505 20.3658L23.398 12.0906C23.3499 11.5617 23.9171 11.1976 24.3779 11.4616L25.5149 12.1127C26.0523 12.4205 26.7316 12.3109 27.1449 11.8497L29.5746 9.13844C29.8364 8.84626 30.2944 8.84753 30.5546 9.14114Z"
        fill="#FEC351"
        stroke="black"
        strokeWidth="0.875148"
      />
      <mask
        id="mask0_450_5084"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="61"
        height="61"
      >
        <circle cx="30.0442" cy="30.0442" r="30.0442" fill="#FF0F48" />
      </mask>
      <g mask="url(#mask0_450_5084)" />
      <mask
        id="mask1_450_5084"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="61"
        height="61"
      >
        <circle cx="30.0442" cy="30.0442" r="30.0442" fill="#A30044" />
      </mask>
      <g mask="url(#mask1_450_5084)">
        <path
          d="M18.5491 38.6706C23.1866 44.1974 25.1907 51.141 24.7408 58.1665C17.7439 57.3896 11.2538 54.2102 6.61629 48.6835C1.97877 43.1567 -0.0253161 36.2131 0.424624 29.1876C7.4215 29.9645 13.9116 33.1439 18.5491 38.6706Z"
          fill="#FFD6E7"
          stroke="black"
          strokeWidth="0.875148"
        />
        <path
          d="M41.39 38.6706C36.7519 44.1981 34.7695 51.1616 35.257 58.2199C42.2927 57.4743 48.8062 54.3128 53.4443 48.7854C58.0823 43.258 60.0647 36.2944 59.5772 29.2362C52.5416 29.9817 46.028 33.1432 41.39 38.6706Z"
          fill="#FFD6E7"
          stroke="black"
          strokeWidth="0.875148"
        />
        <path
          d="M29.6486 14.8776H30.2651C37.0317 14.8776 42.5172 20.3631 42.5172 27.1297V54.306H17.3966V27.1297C17.3966 20.3631 22.882 14.8776 29.6486 14.8776Z"
          fill="#FDF5EC"
          stroke="black"
          strokeWidth="0.875148"
        />
        <path
          d="M47.8609 57.2693V62.3039H11.5987V57.2693C11.5987 55.1312 12.4105 53.1056 14.0865 51.8936C17.0977 49.716 22.5492 46.7174 29.7298 46.7174C36.9105 46.7174 42.362 49.716 45.3732 51.8936C47.0492 53.1056 47.8609 55.1312 47.8609 57.2693Z"
          fill="#DAAF7B"
          stroke="black"
          strokeWidth="0.875148"
        />
        <rect
          x="26.5386"
          y="43.2192"
          width="6.83679"
          height="3.64568"
          fill="#DAAF7B"
          stroke="black"
          strokeWidth="0.875148"
        />
        <path
          d="M20.5981 35.9233C20.5981 35.9233 20.0438 34.0924 19.9263 33.4709"
          stroke="black"
          strokeWidth="0.819929"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.2251 26.2464C19.352 27.709 21.9285 28.5651 24.7049 28.5651C28.4941 28.5651 31.9108 26.9705 34.3207 24.4159C35.2997 26.0253 37.0701 27.1002 39.0916 27.1002C40.4623 27.1002 41.7176 26.606 42.6889 25.786C41.1752 36.7433 36.0337 44.809 29.924 44.809C23.9002 44.809 18.8176 36.9685 17.2251 26.2464Z"
          fill="#DAAF7B"
        />
        <path
          d="M14.1597 23.368C14.1597 26.3531 15.7511 31.001 16.675 32.8217C17.5076 34.4623 18.4423 34.6347 19.445 35.0313L17.721 26.0402C16.5271 25.1836 16.0788 24.3635 15.6983 23.5754C15.1959 22.5347 14.1597 20.0092 14.1597 23.368Z"
          fill="#DAAF7B"
        />
        <path
          d="M45.3315 23.368C45.3315 26.3531 43.7401 31.001 42.8162 32.8217C41.9836 34.4623 41.0489 34.6347 40.0462 35.0313L41.7702 26.0402C42.9641 25.1836 43.4124 24.3635 43.7929 23.5754C44.2953 22.5347 45.3315 20.0092 45.3315 23.368Z"
          fill="#DAAF7B"
        />
        <path
          d="M18.542 32.1743C20.8431 39.7376 25.079 44.8091 29.9237 44.8091C34.7684 44.8091 39.0043 39.7376 41.3054 32.1743"
          stroke="black"
          strokeWidth="0.875148"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.721 26.0402C16.5271 25.1836 16.0788 24.3634 15.6983 23.5754C15.1959 22.5347 14.1597 20.0092 14.1597 23.368C14.1597 26.3531 15.7511 31.001 16.675 32.8217C17.5076 34.4623 18.4423 34.6347 19.445 35.0313"
          stroke="black"
          strokeWidth="0.875148"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M42.0417 25.7534C43.2356 24.8967 43.7903 24.3635 44.1708 23.5754C44.6732 22.5347 45.7095 20.0092 45.7095 23.368C45.7095 26.3531 44.1181 31.001 43.1941 32.8217C42.3616 34.4623 41.4269 34.6347 40.4242 35.0313"
          stroke="black"
          strokeWidth="0.875148"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <mask id="path-17-inside-1_450_5084" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M42.8961 25.6566C42.1661 19.3423 36.801 14.4401 30.291 14.4401H29.6745C23.0079 14.4401 17.5421 19.5809 17.0249 26.1146C19.196 27.6906 21.8669 28.62 24.7549 28.62C28.5314 28.62 31.9366 27.0308 34.3384 24.4847C35.3141 26.0887 37.0785 27.1601 39.0932 27.1601C40.5641 27.1601 41.9015 26.5891 42.8961 25.6566Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M42.8961 25.6566C42.1661 19.3423 36.801 14.4401 30.291 14.4401H29.6745C23.0079 14.4401 17.5421 19.5809 17.0249 26.1146C19.196 27.6906 21.8669 28.62 24.7549 28.62C28.5314 28.62 31.9366 27.0308 34.3384 24.4847C35.3141 26.0887 37.0785 27.1601 39.0932 27.1601C40.5641 27.1601 41.9015 26.5891 42.8961 25.6566Z"
          fill="#FDF5EC"
        />
        <path
          d="M42.8961 25.6566L43.4946 26.2951L43.816 25.9938L43.7654 25.5561L42.8961 25.6566ZM17.0249 26.1146L16.1525 26.0455L16.1138 26.5346L16.5108 26.8228L17.0249 26.1146ZM34.3384 24.4847L35.0861 24.0299L34.4896 23.0491L33.7018 23.8842L34.3384 24.4847ZM30.291 15.3152C36.3515 15.3152 41.3472 19.8792 42.0267 25.7571L43.7654 25.5561C42.985 18.8054 37.2506 13.5649 30.291 13.5649V15.3152ZM29.6745 15.3152H30.291V13.5649H29.6745V15.3152ZM17.8973 26.1836C18.3787 20.1014 23.4681 15.3152 29.6745 15.3152V13.5649C22.5478 13.5649 16.7054 19.0603 16.1525 26.0455L17.8973 26.1836ZM16.5108 26.8228C18.8263 28.5037 21.6761 29.4951 24.7549 29.4951V27.7448C22.0577 27.7448 19.5656 26.8775 17.539 25.4063L16.5108 26.8228ZM24.7549 29.4951C28.7822 29.4951 32.4148 27.7993 34.975 25.0852L33.7018 23.8842C31.4585 26.2623 28.2805 27.7448 24.7549 27.7448V29.4951ZM33.5907 24.9395C34.7185 26.7937 36.7605 28.0352 39.0932 28.0352V26.2849C37.3966 26.2849 35.9096 25.3838 35.0861 24.0299L33.5907 24.9395ZM39.0932 28.0352C40.7951 28.0352 42.3443 27.3735 43.4946 26.2951L42.2975 25.0182C41.4587 25.8046 40.333 26.2849 39.0932 26.2849V28.0352Z"
          fill="black"
          mask="url(#path-17-inside-1_450_5084)"
        />
        <rect x="26.9771" y="45.7656" width="5.96039" height="4.82713" fill="#DAAF7B" />
        <circle cx="30.0442" cy="30.0442" r="29.6067" stroke="black" strokeWidth="0.875148" />
      </g>
      <path
        d="M73.6567 39.4918H77.4412V31.5175H85.2854V28.517H77.4412V23.6783H85.808V20.6237H73.6567V39.4918Z"
        fill="black"
      />
      <path
        d="M100.804 39.4918H104.805L98.0196 20.5967H93.6135L86.8285 39.4918H90.8022L92.0456 35.8966H99.5604L100.804 39.4918ZM98.5332 32.869H93.0728L95.803 24.9758L98.5332 32.869Z"
        fill="black"
      />
      <path d="M107.341 39.4918H111.125V20.6237H107.341V39.4918Z" fill="black" />
      <path
        d="M125.366 26.4896C125.366 28.1926 124.42 29.3009 122.312 29.3009H119.149V23.7594H122.312C124.42 23.7594 125.366 24.8136 125.366 26.4896ZM115.365 20.6237V39.4918H119.149V32.1392H120.933L125.096 39.4918H129.475L124.961 31.8418C127.989 31.0309 129.259 28.7062 129.259 26.4085C129.259 23.2458 126.988 20.6237 122.447 20.6237H115.365Z"
        fill="black"
      />
      <path
        d="M137.521 32.9231V39.4918H141.305V32.9231L147.684 20.6237H143.468L139.44 29.2468L135.385 20.6237H131.114L137.521 32.9231Z"
        fill="black"
      />
    </svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
