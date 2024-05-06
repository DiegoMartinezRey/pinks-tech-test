import s from "./Logo.module.scss";
import cn from "classnames";
export type Sizes = "S" | "M" | "L";

export type LogoProps = {
  size: Sizes;
};

export default function Logo(props: LogoProps) {
  const style = {
    S: s["pk-logo--S"],
    M: s["pk-logo--M"],
    L: s["pk-logo--L"],
  }[props.size];

  return (
    <svg
      className={cn(style, s["pk-logo"], s[`pk-logo--RED`])}
      width="444"
      height="115"
      viewBox="0 0 444 115"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M443.65 8.52007C441.51 14.5801 440.32 20.9001 438.72 27.1101C433.91 45.7601 431.56 64.7901 430.46 83.9801C430.23 88.0601 429.06 89.3401 425.05 89.7701C418.69 90.4401 416.28 88.5301 415.79 82.2601C414.8 69.5801 415.73 56.9501 417.1 44.3501C418.3 33.2701 419.81 22.2301 422.88 11.4701C423.22 10.2601 423.59 9.06007 424.01 7.88007C426.39 1.27007 434.1 -1.66993 440.43 1.57007C442.1 2.43007 443.01 3.84007 443.65 5.49007C443.65 6.51007 443.65 7.51007 443.65 8.52007Z"
        fill="#AE0404"
      />
      <path
        d="M388.56 114.38C388.47 114.53 388.45 114.68 388.52 114.84C387.17 114.84 385.82 114.84 384.47 114.84C384.43 114.7 384.41 114.56 384.4 114.42C385.78 113.28 387.16 113.31 388.56 114.38Z"
        fill="#D47979"
      />
      <path
        d="M421.39 114.83C421.44 114.67 421.42 114.52 421.34 114.38C422.73 113.3 424.12 113.28 425.5 114.41C425.47 114.55 425.45 114.69 425.44 114.84C424.09 114.83 422.74 114.83 421.39 114.83Z"
        fill="#D47878"
      />
      <path
        d="M185.09 101.58C182.76 103.99 180.61 106.09 177.88 107.52C170.03 111.61 162.21 109.04 158.47 101.07C156.37 96.59 155.61 91.78 155.37 86.9C155.05 80.52 155.42 74.14 155.93 67.78C156.25 63.79 157.45 62.7 161.44 62.48C169.13 62.06 170.09 62.94 169.95 70.54C169.84 76.5 169.62 82.46 169.53 88.42C169.49 91.19 169.77 93.97 170.71 96.61C171.69 99.36 173.55 100.07 176.06 98.57C179.31 96.63 181.53 93.64 183.63 90.58C184.14 89.84 183.85 88.95 183.81 88.12C183.38 80.81 183.68 73.53 184.69 66.27C184.94 64.45 185.68 63.41 187.6 63.12C190.26 62.72 192.86 62.18 195.61 62.77C197.49 63.17 198.23 63.96 198.39 65.91C198.83 71.03 198.94 76.13 198.46 81.25C198.34 82.54 198.44 83.84 198.44 85.7C201.18 80.23 203.8 75.3 207.44 71.01C210.75 67.1 214.48 63.8 219.73 62.7C224.72 61.66 228.57 63.63 230.46 68.36C231.69 71.44 232.08 74.69 232.22 77.97C232.43 82.84 232.47 87.71 232.79 92.57C232.95 95.02 232.86 98.04 235.67 99.07C238.45 100.08 240.29 97.73 242.17 96.08C244.18 94.31 244.84 92.31 244.68 89.47C243.24 64.81 242.54 40.14 244.48 15.48C244.65 13.31 244.11 10.65 246.89 9.30999C249.49 8.05999 251.98 6.61999 255 8.03999C256.92 8.93999 257.93 10.18 258.06 12.45C258.72 24.37 258.6 36.29 258.25 48.21C257.97 57.78 257.67 67.35 257.39 76.91C257.38 77.36 257.13 77.89 257.78 78.43C259.92 74.9 262.31 71.61 265.41 68.9C271.08 63.93 277.55 61.38 285.17 62.91C292.95 64.47 296.9 71.22 294.66 78.85C292.5 86.23 287.37 90.91 280.62 94.12C278.27 95.23 278.22 95.53 280.4 97.02C284.26 99.65 288.42 99.1 292.55 97.97C297.65 96.57 301.35 93.21 304.51 89.14C306.47 86.61 308.05 83.84 309.64 81.07C309.99 80.46 310.16 79.48 311.17 79.68C312.04 79.85 312.24 80.73 312.42 81.43C313.09 84.07 313.53 86.86 312.34 89.35C308.2 98.06 302.14 104.98 292.71 108.19C280.33 112.41 268.94 104.81 263.97 96.42C263.16 95.05 263.77 94.73 264.82 94.27C269.14 92.37 273.34 90.26 277.05 87.29C278.91 85.8 280.54 84.11 281.48 81.89C283.26 77.69 280.95 74.16 276.39 74.13C273.29 74.11 270.68 75.42 268.41 77.43C262.57 82.59 259.65 89.41 257.53 96.65C256.61 99.79 255.89 103.01 255.9 106.3C255.91 108 255.06 108.72 253.59 109.08C251.92 109.49 250.25 109.45 248.57 109.19C245.62 108.74 246.02 106.32 245.74 104.05C244.56 104.93 243.52 105.72 242.46 106.48C238.93 109 234.97 109.84 230.71 109.23C224.95 108.41 221.61 104.89 220.1 99.47C218.83 94.9 218.8 90.18 218.61 85.48C218.53 83.55 218.47 81.62 218.01 79.73C217.33 76.91 215.41 76.1 212.89 77.62C210.98 78.77 209.62 80.5 208.38 82.31C203.23 89.77 199.97 98.13 196.94 106.57C196.19 108.65 195.09 109.26 193.1 109.34C186.7 109.62 186.7 109.66 185.52 103.43C185.45 102.92 185.31 102.44 185.09 101.58Z"
        fill="#AE0404"
      />
      <path
        d="M378.28 68.7302C378.78 50.8102 380.64 31.3102 385.51 12.1802C385.84 10.8802 386.26 9.61017 386.71 8.35017C389.04 1.82017 392.68 -0.35983 399.68 0.550171C405.2 1.27017 407.23 4.21017 405.93 9.64017C402.74 22.9202 398.98 36.0702 396.91 49.6002C395.14 61.2202 393.98 72.9102 393.19 84.6302C392.96 88.1302 391.78 89.3002 388.23 89.7302C386.89 89.8902 385.55 89.9602 384.2 89.7602C381.08 89.2802 379.47 87.7002 378.91 84.5702C378.07 79.9002 378.46 75.1902 378.28 68.7302Z"
        fill="#AE0404"
      />
      <path
        d="M332.27 72.68C330.33 79.55 327.58 85.72 324.17 91.6C323.08 93.49 321.93 95.36 320.26 96.83C319.13 97.82 318.15 97.88 317.61 96.24C316.76 93.66 316.24 91.23 317.93 88.58C322.38 81.61 325.95 74.23 327.03 65.89C327.19 64.65 327.39 63.35 327.19 62.14C326.77 59.69 327.98 58.38 329.93 57.33C331.82 56.31 333.81 55.72 335.94 55.59C339.89 55.35 340.43 55.77 341.22 59.55C341.99 63.23 344.23 66.05 346.63 68.77C348.68 71.1 350.86 73.35 352.75 75.81C357.51 82.02 359.44 88.67 355.02 96.32C357.84 95.39 359.64 93.67 361.39 91.92C364.52 88.8 366.73 85.03 368.85 81.2C369.2 80.57 369.36 79.6 370.3 79.66C371.33 79.73 371.55 80.75 371.73 81.51C372.55 84.86 372.56 88.12 370.76 91.26C366.09 99.37 360.1 105.99 350.68 108.52C344.76 110.11 338.79 109.72 333.02 107.7C327.95 105.92 326.14 102.63 326.82 97.33C327.02 95.82 327.55 95.4 328.93 96.23C330.08 96.93 331.23 97.65 332.46 98.17C335.64 99.51 338.75 99.41 341.46 97.08C344.27 94.66 345.06 91.53 344.23 87.96C343.68 85.58 342.29 83.71 340.64 82C339.24 80.55 337.76 79.16 336.41 77.67C335.05 76.17 333.83 74.57 332.27 72.68Z"
        fill="#AE0404"
      />
      <path
        d="M303.06 52.1101C303.56 44.1301 304.77 36.2101 306.7 28.3701C307.47 25.2501 309.36 23.6201 312.45 23.3001C315.22 23.0101 318.01 22.9001 320.72 23.7201C322.64 24.3001 323.87 25.2601 323.4 27.7301C321.67 36.8701 319.53 45.9001 316.43 54.6701C314.99 58.7501 307.23 60.2501 304.16 57.1801C302.75 55.7601 303.2 53.9001 303.06 52.1101Z"
        fill="#AE0404"
      />
      <path
        d="M174.11 40.01C174.11 45.87 169.84 50.43 164.4 50.4C159.03 50.37 155.11 45.95 155.12 39.95C155.13 33.95 159.24 29.52 164.77 29.57C170.06 29.62 174.11 34.14 174.11 40.01Z"
        fill="#AE0404"
      />
      <path
        d="M388.56 114.38C387.17 114.39 385.79 114.41 384.4 114.42C379.77 113.21 377 109.53 377.54 105.33C378.1 100.95 381.65 97.8201 386.15 97.7401C390.85 97.6501 394.75 100.83 395.4 105.27C396.01 109.37 393.27 113.01 388.56 114.38Z"
        fill="#AE0404"
      />
      <path
        d="M425.5 114.41C424.11 114.4 422.73 114.39 421.34 114.38C416.48 112.95 414.06 109.33 414.82 104.61C415.47 100.58 419.33 97.6001 423.75 97.7201C428.23 97.8501 432.09 101.14 432.52 105.2C433 109.71 430.36 113.18 425.5 114.41Z"
        fill="#AE0404"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.94 114.83C28.81 113.84 27.7 110.89 27.39 107.05C25.91 88.3601 26 69.6501 26.69 50.9401C27.09 40.2001 28.08 29.5101 30.03 18.9301C30.36 17.1301 29.89 16.9701 28.35 17.2601C22.39 18.4001 16.61 20.1701 10.8 21.8401C10.07 22.0501 9.37 22.3801 8.63 22.4801C6.98 22.7101 5.23 24.1301 3.67 22.4301C1.74 20.3301 0.499999 17.8801 0.619999 14.9501C0.689999 13.4001 1.99 12.9801 3.17 12.5201C11.1 9.4401 19.31 7.3101 27.61 5.5001C54.42 -0.359902 81.38 -0.919903 108.43 3.5301C118.26 5.1501 127.82 7.81009 136.41 13.0901C143.16 17.2401 148.33 22.6701 149.84 30.7801C151.72 40.8901 147.55 48.8001 140.46 55.5001C132.69 62.8601 123.26 67.4701 113.3 71.0301C91.17 78.9301 68.33 82.3101 44.83 81.1501L44.7741 81.1474C41.5599 80.99 41.5497 80.9895 41.5 84.3501C41.4 92.3201 41.18 100.3 41.27 108.27C41.3 111.38 40.41 113.59 37.49 114.84C35.97 114.83 34.45 114.83 32.94 114.83ZM42.09 68.4101C41.98 70.0001 42.46 70.5101 43.99 70.4601C45.7744 70.4016 47.5641 70.418 48.9876 70.431C49.5106 70.4358 49.9843 70.4401 50.39 70.4401C51.9324 70.3242 53.3795 70.2238 54.7612 70.128L54.7626 70.1279C57.6712 69.9261 60.2902 69.7445 62.9 69.4801C76.76 68.0801 90.34 65.4201 103.21 59.9101C110.21 56.9101 116.79 53.2001 121.8 47.2801C125.84 42.5101 127.49 37.1001 126.1 30.9001C124.36 23.1301 118.84 18.9301 111.96 16.0601C105.77 13.4801 99.23 12.2101 92.58 11.8501C78.79 11.1001 64.99 10.6401 51.38 13.9201C49.81 14.3001 49.37 15.0201 49.13 16.3801C48.7347 18.6423 48.3062 20.9014 47.8776 23.1609L47.8774 23.1619C47.5255 25.0172 47.1736 26.8726 46.84 28.7301C44.49 41.8701 42.99 55.1001 42.09 68.4101Z"
        fill="#AE0404"
      />
    </svg>
  );
}
