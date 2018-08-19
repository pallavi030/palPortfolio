import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
  render() {
    return (
        <div>
            <div className="header">
                <div class="meta">
                    <h1>
                        <Link to="./">inspect element</Link>
                    </h1>
                    <p>a creative design studio based in london.</p>
                    <p className="sub">we craft beautiful, robust, and effortless web-based experiences for businesses.</p>
                </div>
            
                <div class="art">
                    <svg xmlns="http://www.w3.org/2000/svg" width="404" height="333"><path d="M 242.427 1.394 C 237.732 2.823 231.405 9.458 225.18 19.667 C 222.323 24.465 218.547 29.671 216.914 31.304 C 212.118 35.796 208.954 34.673 196.402 23.648 C 184.768 13.44 176.502 8.846 172.012 9.969 C 164.154 11.908 161.603 16.808 154.969 42.023 C 149.765 62.235 147.724 66.115 142.825 65.196 C 137.008 63.971 128.844 58.05 115.578 45.494 C 108.332 38.552 101.188 32.631 99.76 32.325 C 96.392 31.406 93.433 34.265 92.208 39.675 C 91.698 41.819 91.188 51.721 91.188 61.725 C 91.188 81.631 92.718 92.758 96.596 100.312 L 98.943 104.804 L 95.167 114.094 C 89.351 128.181 87.616 137.879 87.718 156.458 C 87.718 170.75 88.024 173.098 90.473 180.448 C 100.372 210.358 133.947 238.635 170.277 247.823 C 192.83 253.54 219.976 253.54 239.569 247.823 C 286.411 234.144 315.801 189.431 313.352 135.531 C 312.025 106.029 302.229 83.367 282.533 64.073 C 267.735 49.475 251.101 42.431 229.16 41.41 C 220.078 40.9 216.302 41.206 211.097 42.635 C 202.117 44.983 201.913 46.106 210.689 44.575 C 226.099 42.023 247.223 47.127 263.143 57.233 C 281.104 68.667 296.412 91.023 302.535 114.604 C 308.964 139.615 304.474 173.098 291.513 196.271 C 284.982 207.806 269.572 223.425 258.347 229.754 C 241.712 239.146 225.078 242.821 203.443 241.8 C 168.236 240.269 142.723 229.04 120.068 205.05 C 106.801 191.065 101.393 178.202 101.393 160.235 C 101.393 137.369 110.169 114.808 124.762 100.312 C 137.008 88.165 150.275 83.162 172.828 82.244 C 184.87 81.733 187.625 81.937 194.667 83.877 C 199.055 85.102 202.933 85.919 203.137 85.715 C 203.852 84.898 193.646 77.956 188.544 75.608 C 180.38 72.035 173.951 70.708 162.317 69.994 C 152.418 69.483 151.5 69.177 152.826 67.748 C 155.786 64.379 157.623 59.173 161.5 43.146 C 166.093 24.567 169.052 17.319 172.522 16.808 C 175.89 16.298 182.217 19.973 190.891 27.629 C 202.219 37.531 204.26 38.96 208.75 40.185 C 212.118 41.104 213.444 40.9 217.22 39.063 C 222.221 36.613 224.16 34.265 232.426 20.994 C 239.161 9.969 241.508 7.927 248.754 6.396 C 258.041 4.456 262.735 4.865 268.756 8.029 C 271.817 9.663 274.879 11.194 275.389 11.398 C 277.634 12.215 271.103 6.09 266.817 3.231 C 262.735 0.577 261.51 0.271 254.061 0.373 C 249.468 0.373 244.264 0.883 242.427 1.394 Z M 106.495 46.821 C 115.578 56.008 127.211 65.298 133.743 68.462 C 138.947 71.015 140.58 72.75 137.825 72.75 C 137.11 72.75 133.334 74.281 129.457 76.119 C 120.884 80.202 111.496 87.858 105.985 95.106 C 103.025 98.985 101.801 99.904 101.188 98.883 C 99.045 95.004 97.106 40.083 99.147 40.083 C 99.556 40.083 102.923 43.146 106.495 46.821 Z M 329.578 19.667 C 321.618 23.648 314.475 30.283 310.495 37.429 L 308.25 41.615 L 313.352 36.817 C 319.883 30.794 336.109 22.423 336.109 25.179 C 336.109 25.383 334.068 31.406 331.517 38.45 C 328.966 45.596 326.925 52.129 326.925 52.946 C 326.925 53.865 328.251 55.906 329.884 57.54 C 332.436 60.092 333.66 60.5 338.457 60.5 C 341.416 60.5 346.212 59.785 348.968 58.969 C 351.723 58.152 354.376 57.437 354.887 57.437 C 355.397 57.437 355.499 61.215 355.091 65.808 C 354.785 70.504 354.274 79.079 353.968 85 L 353.458 95.719 L 355.907 87.042 C 363.765 58.867 364.071 56.723 360.091 52.844 C 357.234 49.883 354.07 49.679 346.927 51.823 C 340.702 53.762 336.211 53.762 335.497 51.925 C 335.191 51.21 336.62 46.208 338.661 41.002 C 340.702 35.694 342.641 29.569 342.947 27.119 C 343.457 23.546 343.151 22.525 340.906 20.279 C 337.742 17.115 334.987 17.012 329.578 19.667 Z M 305.494 24.771 C 305.494 26.098 306.208 26.812 307.535 26.812 C 308.862 26.812 309.576 26.098 309.576 24.771 C 309.576 23.444 308.862 22.729 307.535 22.729 C 306.208 22.729 305.494 23.444 305.494 24.771 Z" fill="rgb(255,255,255)"></path><path d="M 253.448 123.281 C 250.795 126.548 254.775 131.55 258.347 129.304 C 261.816 127.058 260.592 121.75 256.51 121.75 C 255.489 121.75 254.163 122.465 253.448 123.281 Z M 393.87 133.183 C 391.013 143.392 391.931 155.846 396.115 164.829 C 397.85 168.708 398.769 171.771 398.258 171.771 C 395.401 171.771 380.706 178.917 373.46 183.715 C 368.97 186.777 364.786 189.023 364.071 188.717 C 361.622 187.798 356.52 175.344 355.397 167.687 C 353.05 151.354 353.356 152.069 351.723 159.521 C 348.866 172.587 351.417 185.348 358.561 193.515 C 363.765 199.435 366.623 198.925 376.521 190.146 C 383.563 183.817 398.36 172.792 399.687 172.792 C 399.891 172.792 400.708 174.221 401.422 175.854 C 402.136 177.59 402.851 178.815 403.055 178.61 C 403.259 178.406 402.34 172.485 400.912 165.442 C 399.483 158.296 397.646 146.658 397.034 139.41 L 395.707 126.344 Z" fill="rgb(255,255,255)"></path><path d="M 374.276 133.796 C 368.153 136.96 360.091 141.962 356.417 144.923 C 349.478 150.435 344.375 155.438 345.702 155.438 C 347.845 155.438 367.031 144.617 372.848 140.125 C 381.828 133.285 387.849 127.977 386.625 127.977 C 386.114 127.977 380.501 130.529 374.276 133.796 Z M 149.765 152.477 C 148.438 154.008 148.132 154.927 148.948 156.152 C 150.989 159.419 153.132 160.031 155.377 158.092 C 158.031 155.744 158.031 154.212 155.684 152.069 C 153.234 149.823 152.112 149.925 149.765 152.477 Z M 377.338 153.906 C 376.93 154.825 377.134 156.05 377.746 156.662 C 379.277 158.194 382.236 156.765 381.828 154.723 C 381.42 152.375 378.154 151.763 377.338 153.906 Z M 369.786 158.5 C 369.786 159.827 370.5 160.542 371.827 160.542 C 373.154 160.542 373.868 159.827 373.868 158.5 C 373.868 157.173 373.154 156.458 371.827 156.458 C 370.5 156.458 369.786 157.173 369.786 158.5 Z M 358.867 167.279 C 358.05 169.423 360.193 171.567 361.724 170.035 C 363.051 168.708 362.234 165.646 360.602 165.646 C 359.989 165.646 359.275 166.36 358.867 167.279 Z M 385.4 167.279 C 384.583 169.423 386.727 171.567 388.257 170.035 C 389.584 168.708 388.768 165.646 387.135 165.646 C 386.522 165.646 385.808 166.36 385.4 167.279 Z M 373.358 173.813 C 372.95 174.527 373.052 175.446 373.664 176.058 C 375.093 177.487 378.256 176.262 377.746 174.527 C 377.134 172.894 374.276 172.383 373.358 173.813 Z M 242.631 185.348 C 233.14 195.148 222.731 203.315 214.873 207.194 C 209.771 209.644 208.852 209.848 199.055 209.235 C 189.564 208.623 188.85 208.725 190.687 210.154 C 199.974 217.3 211.812 219.137 221.098 214.952 C 230.487 210.562 242.733 196.373 248.856 182.592 C 250.285 179.427 251.305 176.875 251.101 176.875 C 250.999 176.875 247.121 180.754 242.631 185.348 Z M 360.091 177.896 C 359.683 178.61 359.785 179.529 360.397 180.142 C 361.826 181.571 364.99 180.346 364.479 178.61 C 363.867 176.977 361.01 176.467 360.091 177.896 Z M 26.385 186.471 C 25.263 191.881 26.487 203.417 28.834 209.542 C 30.875 214.85 37.407 224.65 43.632 231.49 L 47.306 235.573 L 44.652 229.448 C 43.224 226.079 39.856 218.525 37.305 212.604 C 34.753 206.683 31.386 197.496 29.855 192.188 C 27.202 182.592 27.1 182.49 26.385 186.471 Z M 50.367 186.369 C 43.836 187.185 43.02 187.492 45.061 188.41 L 47.408 189.533 L 44.55 190.758 C 41.999 191.881 42.713 191.983 51.184 192.085 C 59.756 192.188 60.674 192.392 60.164 193.923 C 58.021 200.967 53.327 229.448 53.531 233.837 C 53.735 239.452 65.369 205.56 66.287 196.373 C 66.899 190.758 66.797 190.146 64.348 187.696 C 61.491 184.837 61.593 184.837 50.367 186.369 Z M 10.363 212.604 C 3.628 228.325 0.26 237.819 0.975 239.452 C 2.199 242.719 7.098 243.638 15.67 242.31 C 22.405 241.29 36.08 237.513 36.08 236.696 C 36.08 236.492 30.161 236.492 22.916 236.492 C 15.67 236.594 9.445 236.288 9.139 235.981 C 8.73 235.675 9.139 233.633 9.955 231.388 C 11.792 226.181 14.956 208.317 14.445 205.867 C 14.241 204.642 12.71 207.194 10.363 212.604 Z M 303.045 215.565 C 303.555 215.973 307.433 218.933 311.617 221.996 C 323.761 230.775 328.558 237.512 332.64 250.885 C 334.17 255.683 334.579 260.277 334.477 272.323 C 334.375 291.719 332.64 298.762 322.945 318.26 C 318.965 326.019 315.903 332.654 316.107 332.756 C 316.209 332.96 319.373 328.979 323.047 323.977 C 337.232 304.99 341.314 294.373 342.028 274.263 C 342.947 247.619 337.232 232.817 322.026 223.119 C 315.495 218.933 299.779 212.706 303.045 215.565 Z M 142.009 243.433 C 136.396 250.783 133.13 261.604 133.028 272.323 C 133.028 291.004 147.315 314.177 163.95 322.344 C 168.338 324.487 173.542 326.121 176.91 326.427 L 182.523 327.04 L 176.91 324.794 C 163.542 319.485 154.867 311.012 146.907 295.19 C 140.988 283.45 139.458 274.977 141.09 262.217 C 141.805 257.112 143.233 250.885 144.458 248.333 L 146.499 243.74 L 147.826 247.823 L 149.152 251.906 L 149.254 246.7 C 149.356 242.719 148.948 241.29 147.724 240.779 C 145.07 239.758 144.662 239.962 142.009 243.433 Z M 252.53 258.848 C 243.345 261.196 239.569 262.727 238.549 264.156 C 236.916 266.81 238.141 279.265 241.712 294.067 C 243.141 299.885 244.264 307.337 244.264 310.604 C 244.264 319.077 248.244 322.65 251.815 317.546 C 253.856 314.688 253.856 310.094 251.917 300.906 C 251.101 297.027 250.693 293.556 250.999 293.352 C 251.305 293.046 254.163 292.229 257.428 291.617 C 263.551 290.29 276.716 285.492 278.451 283.858 C 281.206 281.306 261.102 285.696 252.326 289.575 C 250.897 290.188 250.489 289.269 249.774 282.837 L 249.06 275.385 L 247.835 279.469 L 246.611 283.552 L 245.182 275.385 L 243.651 267.219 L 255.489 261.4 C 261.918 258.235 266.817 255.683 266.205 255.683 C 265.694 255.683 259.469 257.112 252.53 258.848 Z M 218.343 276.508 C 217.118 286.104 217.73 301.927 219.874 313.462 C 221.506 322.242 222.323 324.692 223.343 323.875 C 223.956 323.365 224.772 323.058 224.976 323.262 C 225.18 323.569 225.384 320.915 225.384 317.444 C 225.384 313.973 225.997 304.479 226.711 296.312 C 227.425 287.84 227.629 279.571 227.119 276.917 L 226.303 272.323 L 224.466 278.958 L 222.527 285.594 L 221.2 279.06 C 220.486 275.487 219.669 272.425 219.465 272.119 C 219.261 271.915 218.751 273.854 218.343 276.508 Z" fill="rgb(255,255,255)"></path><path d="M 265.082 302.131 C 259.571 307.338 252.836 316.525 253.856 317.444 C 254.673 318.26 267.837 304.581 270.083 300.6 C 272.634 296.006 271.001 296.517 265.082 302.131 Z" fill="rgb(255,255,255)"></path></svg>
                </div>
            </div>
            <span className="contact">
                <Link to="./projects">view our work</Link>
                <span> // </span>
                <a href="mailto:meh@inspectelement.io"> let's work together -></a>
            </span>
        </div>
    )
  }
}
