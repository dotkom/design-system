import React from 'react';
import { colors } from 'common/colors';

interface Props {
  width?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

const OldLogo = ({ width, primaryColor = colors.officialBlue, secondaryColor = colors.officialOrange }: Props) => {
  return (
    <svg viewBox="0 0 239 59" width={width}>
      <defs />
      <g fill={primaryColor}>
        <path d="M120.49 55.778l11.203-42.789h10.948l-11.002 42.789z" />
        <path d="M142.285 13.265l-10.859 42.237h-10.578l11.059-42.237h10.378m.711-.553H131.48l-.109.413-11.059 42.237-.18.691h11.721l.107-.414 10.857-42.237.179-.69z" />
      </g>
      <g fill={primaryColor}>
        <path d="M137.949 55.778l8.33-31.877h11.155l-8.33 31.877z" />
        <path d="M157.076 24.177l-8.186 31.325h-10.584l8.186-31.325h10.584m.715-.552h-11.725l-.107.413-8.188 31.325-.18.691h11.725l.107-.412 8.186-31.325.182-.692z" />
      </g>
      <g fill={primaryColor}>
        <path d="M180.557 55.778l4.736-18.132c.678-2.627 1.021-4.201 1.021-4.681 0-1.001-.355-1.765-1.092-2.333-.746-.578-1.812-.872-3.166-.872-1.494 0-3.186.514-5.029 1.53-1.842 1.014-3.309 2.371-4.361 4.035-.768 1.19-1.65 3.674-2.621 7.386l-3.41 13.066h-11.15l8.33-31.877h10.596l-.941 3.71c2.297-1.527 4.477-2.646 6.488-3.328 2.197-.744 4.541-1.12 6.967-1.12 3.266 0 5.885.764 7.787 2.271 1.914 1.523 2.887 3.571 2.887 6.086 0 1.138-.402 3.206-1.227 6.324l-4.662 17.934h-11.153z" />
        <path d="M186.924 23.438c3.219 0 5.756.738 7.615 2.212 1.855 1.476 2.781 3.431 2.781 5.87 0 1.102-.404 3.188-1.215 6.254l-4.609 17.728h-10.582l4.646-17.786c.686-2.654 1.031-4.238 1.031-4.75 0-1.081-.398-1.932-1.199-2.551-.799-.619-1.91-.93-3.336-.93-1.549 0-3.27.521-5.162 1.563s-3.379 2.419-4.461 4.13c-.789 1.22-1.672 3.706-2.654 7.463l-3.357 12.86h-10.58l8.186-31.325h10.027l-1.031 4.069c2.508-1.729 4.848-2.964 7.023-3.702 2.176-.735 4.469-1.105 6.877-1.105m0-.552c-2.457 0-4.83.382-7.055 1.135-1.859.631-3.859 1.629-5.959 2.972l.68-2.681.176-.688H163.6l-.107.413-8.186 31.325-.18.691h11.721l.107-.412 3.357-12.86c.963-3.683 1.832-6.14 2.584-7.303 1.031-1.629 2.465-2.955 4.264-3.946 1.803-.991 3.449-1.495 4.896-1.495 1.291 0 2.301.274 2.998.814.662.513.984 1.204.984 2.114 0 .313-.176 1.368-1.014 4.612l-4.646 17.784-.18.691h11.723l.107-.413 4.609-17.728c.83-3.14 1.234-5.231 1.234-6.393 0-2.604-1.006-4.724-2.99-6.302-1.951-1.545-4.627-2.33-7.957-2.33z" />
      </g>
      <g fill={primaryColor}>
        <path d="M218.025 56.516c-5.301 0-9.676-1.365-13.004-4.058-3.346-2.706-5.043-6.337-5.043-10.791 0-4.338 1.525-8.249 4.531-11.627 4.092-4.564 10.004-6.877 17.572-6.877 4.836 0 8.742 1.217 11.607 3.618 2.879 2.415 4.34 5.835 4.34 10.167 0 2.06-.252 3.942-.75 5.596l-.059.197h-26.496c-.012.203-.018.366-.018.491 0 1.992.717 3.618 2.135 4.833 1.428 1.229 3.197 1.852 5.26 1.852 3.4 0 6.09-1.428 7.994-4.243l.096-.142 10.062 1.346-.219.36c-1.861 3.081-4.387 5.424-7.508 6.964-3.111 1.535-6.644 2.314-10.5 2.314zm9.807-19.491c.016-.241.021-.435.021-.579 0-2.224-.627-3.911-1.861-5.017-1.246-1.107-2.945-1.668-5.051-1.668-2.117 0-4.039.646-5.717 1.92-1.594 1.212-2.715 3.009-3.334 5.344h15.942z" />
        <path d="M222.082 23.438c4.795 0 8.604 1.186 11.432 3.554 2.826 2.371 4.238 5.688 4.238 9.955 0 2.046-.246 3.886-.736 5.517h-26.547c-.027.335-.039.59-.039.768 0 2.085.744 3.767 2.232 5.043 1.486 1.279 3.301 1.918 5.439 1.918 3.512 0 6.254-1.455 8.223-4.365l9.475 1.268c-1.842 3.049-4.309 5.336-7.393 6.859-3.086 1.521-6.545 2.285-10.381 2.285-5.26 0-9.537-1.332-12.83-3.996-3.295-2.665-4.939-6.189-4.939-10.576 0-4.287 1.486-8.102 4.461-11.443 4.054-4.525 9.844-6.787 17.365-6.787m-10.545 13.864h16.555c.025-.373.039-.658.039-.855 0-2.32-.654-4.059-1.955-5.223-1.303-1.158-3.049-1.738-5.234-1.738-2.189 0-4.15.659-5.883 1.977-1.733 1.315-2.907 3.264-3.522 5.839m10.545-14.416c-7.65 0-13.631 2.345-17.777 6.969-3.053 3.431-4.602 7.405-4.602 11.812 0 4.542 1.73 8.244 5.145 11.006 3.379 2.732 7.812 4.118 13.178 4.118 3.898 0 7.473-.788 10.625-2.342 3.168-1.564 5.732-3.942 7.621-7.069l.436-.721-.834-.111-9.477-1.268-.338-.046-.191.283c-1.877 2.774-4.416 4.123-7.766 4.123-1.996 0-3.705-.601-5.08-1.784-1.373-1.178-2.039-2.69-2.039-4.625 0-.062.002-.134.004-.216h26.439l.117-.393c.506-1.68.762-3.589.762-5.676 0-4.417-1.492-7.908-4.438-10.378-2.918-2.443-6.883-3.682-11.785-3.682zm-9.828 13.864c.619-2.106 1.672-3.735 3.139-4.849 1.627-1.237 3.494-1.864 5.549-1.864 2.035 0 3.674.538 4.867 1.599 1.174 1.05 1.77 2.669 1.77 4.811 0 .084-.002.186-.008.304h-15.317v-.001z" />
      </g>
      <path
        fill={secondaryColor}
        stroke="#FFF"
        strokeWidth=".5591"
        d="M159.193 15.618c0 2.959-2.576 5.357-5.75 5.357-3.18 0-5.752-2.398-5.752-5.357s2.572-5.359 5.752-5.359c3.174 0 5.75 2.4 5.75 5.359z"
      />
      <path
        fill={secondaryColor}
        fillRule="evenodd"
        stroke="#FFF"
        strokeWidth=".5521"
        d="M0 58.39c19.63-19.177 35.583-27.692 45.363-32.053-1.777 3.476-3.838 17.375-3.838 17.375s30.709-25.679 84.092-29.541c-3.312-.295-6.638-.431-9.943-.431-29.243 0-57.129 10.601-63.955 14.838 1.178-8.623 5.083-14.183 5.083-14.183S28.807 19.253 0 58.39z"
        clipRule="evenodd"
      />
      <g fill={primaryColor}>
        <path d="M103.252 55.778l4.735-18.132c.846-3.256 1.023-4.343 1.023-4.681 0-1-.356-1.763-1.09-2.333-.748-.578-1.814-.872-3.168-.872-1.494 0-3.186.514-5.029 1.53-1.842 1.013-3.31 2.37-4.363 4.035-.769 1.195-1.65 3.679-2.621 7.386l-3.407 13.066H78.178L86.509 23.9h10.599l-.943 3.709c2.296-1.526 4.477-2.645 6.49-3.328 2.195-.744 4.539-1.12 6.966-1.12 3.268 0 5.887.764 7.785 2.271 1.917 1.524 2.887 3.572 2.887 6.086 0 1.135-.4 3.203-1.225 6.324l-4.662 17.934h-11.154z" />
        <path d="M109.619 23.438c3.221 0 5.758.738 7.613 2.212 1.855 1.476 2.783 3.431 2.783 5.87 0 1.102-.406 3.188-1.217 6.254l-4.607 17.728h-10.582l4.645-17.786c.689-2.654 1.032-4.238 1.032-4.75 0-1.081-.399-1.932-1.196-2.551-.801-.619-1.914-.93-3.338-.93-1.548 0-3.27.521-5.162 1.563-1.895 1.042-3.381 2.419-4.463 4.13-.785 1.22-1.671 3.706-2.654 7.463l-3.354 12.86H78.535l8.187-31.325h10.03l-1.035 4.069c2.508-1.729 4.85-2.964 7.025-3.702 2.175-.735 4.467-1.105 6.877-1.105m0-.552c-2.457 0-4.83.382-7.054 1.135-1.861.631-3.861 1.629-5.959 2.972l.682-2.68.175-.688H86.297l-.108.413-8.187 31.325-.181.691H89.547l.107-.412 3.354-12.86c.963-3.678 1.832-6.136 2.584-7.304 1.03-1.629 2.464-2.954 4.265-3.945 1.802-.991 3.449-1.495 4.896-1.495 1.292 0 2.301.274 3 .814.661.514.982 1.205.982 2.114 0 .264-.132 1.213-1.014 4.611l-4.645 17.785-.181.691h11.724l.107-.413 4.607-17.728c.832-3.142 1.234-5.233 1.234-6.393 0-2.603-1.005-4.724-2.99-6.302-1.949-1.546-4.626-2.331-7.958-2.331z" />
      </g>
      <g fill={primaryColor}>
        <path d="M44.246 56.68c-5.793 0-10.729-1.152-14.67-3.424-3.944-2.274-6.781-5.138-8.434-8.512-.184-.375-.352-.751-.515-1.125l-.087-.201.176-.131c3.571-2.649 7.209-5.111 10.813-7.318l.361-.222.056.42c.373 2.777 1.604 5.181 3.661 7.146 2.526 2.413 5.901 3.637 10.033 3.637 3.368 0 6.652-.973 9.761-2.891s5.72-4.87 7.759-8.776c.471-.903.896-1.832 1.298-2.84l.04-.1.097-.047c4.625-2.22 9.465-4.261 14.383-6.066l.411-.151-.041.436c-.437 4.665-1.947 9.242-4.489 13.602-3.081 5.288-7.324 9.415-12.612 12.267-5.285 2.85-11.341 4.296-18.001 4.296z" />
        <path d="M79.073 26.49c-.433 4.621-1.905 9.119-4.452 13.489-3.07 5.27-7.238 9.322-12.505 12.162s-11.224 4.262-17.87 4.262c-5.773 0-10.617-1.13-14.532-3.387-3.915-2.258-6.688-5.056-8.323-8.394-.182-.371-.349-.743-.51-1.114 3.58-2.656 7.174-5.089 10.793-7.305.38 2.834 1.615 5.275 3.743 7.309 2.591 2.476 5.999 3.714 10.224 3.714 3.436 0 6.738-.978 9.906-2.932s5.787-4.916 7.858-8.884c.501-.961.93-1.914 1.31-2.865 4.23-2.029 9.029-4.099 14.358-6.055m.632-.82l-.822.301c-4.926 1.809-9.773 3.853-14.407 6.076l-.194.094-.08.199c-.399.999-.82 1.92-1.287 2.815-2.015 3.86-4.592 6.777-7.659 8.669-3.065 1.891-6.3 2.85-9.616 2.85-4.058 0-7.369-1.198-9.842-3.562-2.01-1.921-3.213-4.27-3.577-6.982l-.113-.84-.723.442c-3.612 2.211-7.256 4.678-10.834 7.332l-.351.262.175.402c.165.379.335.759.52 1.138 1.677 3.423 4.551 6.326 8.543 8.629 3.983 2.296 8.966 3.46 14.808 3.46 6.706 0 12.806-1.456 18.132-4.327 5.333-2.876 9.613-7.038 12.72-12.37 2.562-4.396 4.084-9.011 4.525-13.716l.082-.872z" />
      </g>
      <g fill={primaryColor}>
        <path d="M18.687 33.698c.087-2.948.638-6.056 1.639-9.24 1.44-4.699 3.668-8.837 6.623-12.297 2.957-3.463 6.735-6.238 11.229-8.247C42.672 1.905 47.855.886 53.583.886c7.693 0 14.001 2.093 18.749 6.221 2.923 2.543 4.978 5.644 6.106 9.218l.088.278-.283.072c-4.12 1.054-8.186 2.258-12.083 3.579l-.287.098-.07-.295c-.566-2.386-1.712-4.381-3.406-5.928-2.555-2.332-5.862-3.515-9.828-3.515-6.105 0-11.142 2.488-14.97 7.395-.903 1.159-1.727 2.393-2.446 3.667l-.034.061-.06.037c-5.38 3.374-10.733 7.457-15.911 12.136l-.48.434.019-.646z" />
        <path d="M53.582 1.163c7.661 0 13.85 2.051 18.567 6.153 2.903 2.525 4.908 5.559 6.024 9.093-4.428 1.133-8.498 2.363-12.104 3.585-.576-2.429-1.727-4.459-3.488-6.068-2.62-2.392-5.958-3.587-10.014-3.587-6.225 0-11.287 2.501-15.188 7.501-.939 1.205-1.757 2.44-2.469 3.701-4.821 3.023-10.219 6.986-15.949 12.165.086-2.912.621-5.967 1.626-9.165 1.437-4.687 3.626-8.753 6.569-12.2 2.942-3.446 6.653-6.172 11.132-8.174 4.48-2.002 9.577-3.004 15.294-3.004m0-.552c-5.767 0-10.988 1.027-15.518 3.052-4.532 2.026-8.343 4.825-11.326 8.319-2.979 3.488-5.225 7.659-6.677 12.397-1.007 3.204-1.562 6.337-1.65 9.31l-.038 1.294.96-.868c5.166-4.667 10.506-8.741 15.873-12.106l.119-.074.069-.122c.713-1.263 1.528-2.485 2.423-3.633 3.772-4.836 8.736-7.288 14.752-7.288 3.895 0 7.139 1.158 9.642 3.442 1.652 1.509 2.77 3.457 3.323 5.788l.14.59.575-.195c3.891-1.318 7.95-2.521 12.063-3.573l.565-.145-.177-.556c-1.144-3.623-3.226-6.766-6.188-9.343C67.713 2.727 61.344.611 53.582.611z" />
      </g>
    </svg>
  );
};

export default OldLogo;
