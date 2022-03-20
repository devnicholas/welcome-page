export class Decoration {
  static getTheme(hex) {
    hex = hex.slice(1);
    const r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16);
    const g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16);
    const b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    const average = r + g + b / 3;
    return average > 128 ? "light" : "dark";
  }
  static getTextColor(theme) {
    return theme === "light" ? "#000" : "#fff";
  }
  static configIcon(theme) {
    const iconColor = this.getTextColor(theme);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6"
      >
        <path
          fill={iconColor}
          d="M245.151,168a88,88,0,1,0,88,88A88.1,88.1,0,0,0,245.151,168Zm0,144a56,56,0,1,1,56-56A56.063,56.063,0,0,1,245.151,312Z"
        />
        <path
          fill={iconColor}
          d="M464.7,322.319l-31.77-26.153a193.081,193.081,0,0,0,0-80.332l31.77-26.153a19.941,19.941,0,0,0,4.606-25.439l-32.612-56.483a19.936,19.936,0,0,0-24.337-8.73l-38.561,14.447a192.038,192.038,0,0,0-69.54-40.192L297.49,32.713A19.936,19.936,0,0,0,277.762,16H212.54a19.937,19.937,0,0,0-19.728,16.712L186.05,73.284a192.03,192.03,0,0,0-69.54,40.192L77.945,99.027a19.937,19.937,0,0,0-24.334,8.731L21,164.245a19.94,19.94,0,0,0,4.61,25.438l31.767,26.151a193.081,193.081,0,0,0,0,80.332l-31.77,26.153A19.942,19.942,0,0,0,21,347.758l32.612,56.483a19.937,19.937,0,0,0,24.337,8.73l38.562-14.447a192.03,192.03,0,0,0,69.54,40.192l6.762,40.571A19.937,19.937,0,0,0,212.54,496h65.222a19.936,19.936,0,0,0,19.728-16.712l6.763-40.572a192.038,192.038,0,0,0,69.54-40.192l38.564,14.449a19.938,19.938,0,0,0,24.334-8.731L469.3,347.755A19.939,19.939,0,0,0,464.7,322.319Zm-50.636,57.12-48.109-18.024-7.285,7.334a159.955,159.955,0,0,1-72.625,41.973l-10,2.636L267.6,464h-44.89l-8.442-50.642-10-2.636a159.955,159.955,0,0,1-72.625-41.973l-7.285-7.334L76.241,379.439,53.8,340.562l39.629-32.624-2.7-9.973a160.9,160.9,0,0,1,0-83.93l2.7-9.972L53.8,171.439l22.446-38.878,48.109,18.024,7.285-7.334a159.955,159.955,0,0,1,72.625-41.973l10-2.636L222.706,48H267.6l8.442,50.642,10,2.636a159.955,159.955,0,0,1,72.625,41.973l7.285,7.334,48.109-18.024,22.447,38.877-39.629,32.625,2.7,9.972a160.9,160.9,0,0,1,0,83.93l-2.7,9.973,39.629,32.623Z"
        />
      </svg>
    );
  }
  static linkIcon(theme) {
    const iconColor = this.getTextColor(theme);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6"
      >
        <path
          fill={iconColor}
          d="M457.47,55.833c-53.026-53.026-139.307-53.026-192.332,0L168.971,152,191.6,174.627,287.765,78.46A104,104,0,0,1,434.843,225.539l-96.167,96.167L361.3,344.333l96.167-96.167C510.5,195.14,510.5,108.86,457.47,55.833Z"
        />
        <path
          fill={iconColor}
          d="M225.539,434.843a104,104,0,0,1-147.078,0h0a104,104,0,0,1,0-147.078l90.511-90.511-22.627-22.627L55.833,265.138A136,136,0,1,0,248.166,457.47l90.51-90.51-22.627-22.627Z"
        />
        <rect
          width="320"
          height="32"
          x="93.824"
          y="243.48"
          fill={iconColor}
          transform="rotate(-45 253.823 259.48)"
        />
      </svg>
    );
  }
  static closeIcon(color = "#9ca3af") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6"
      >
        <polygon
          fill={color}
          points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"
        />
      </svg>
    );
  }
  static addIcon(color = "#9ca3af") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6"
      >
        <polygon
          fill={color}
          points="440 240 272 240 272 72 240 72 240 240 72 240 72 272 240 272 240 440 272 440 272 272 440 272 440 240"
        />
      </svg>
    );
  }
}