import React from 'react';

function WidgetsArea({ addNewItem }) {
  return (
    <div className="widgets">
      <div className="widgets__wrapper">
        <div className="widgets__item" onClick={() => addNewItem('headline')}>
          <div className="widgets__item__icon">
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.66665 2.08334H21.3333C22.4839 2.08334 23.4166 3.01608 23.4166 4.16668V8.33334C23.4166 9.48394 22.4839 10.4167 21.3333 10.4167H4.66665C3.51605 10.4167 2.58331 9.48394 2.58331 8.33334V4.16668C2.58331 3.01608 3.51605 2.08334 4.66665 2.08334ZM4.66665 4.16668V8.33334H21.3333V4.16668H4.66665ZM23.4166 16.6667V18.75H2.58331V16.6667H23.4166ZM23.4166 20.8333V22.9167H2.58331V20.8333H23.4166Z"
                fill="#97AACD"
              />
              <path
                d="M23.4166 18.75V16.6667H2.58331V18.75H23.4166Z"
                fill="#97AACD"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.4166 12.5V14.5833H2.58331V12.5H23.4166Z"
                fill="#97AACD"
              />
            </svg>
          </div>
          <div className="widgets__item__title">Headline</div>
        </div>
        <div className="widgets__item" onClick={() => addNewItem('paragraph')}>
          <div className="widgets__item__icon">
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.1666 17.7083V19.7917H2.58331V17.7083H17.1666ZM23.4166 13.5417V15.625H2.58331V13.5417H23.4166ZM17.1666 9.37501V11.4583H2.58331V9.37501H17.1666ZM23.4166 5.20834V7.29168H2.58331V5.20834H23.4166Z"
                  fill="#97AACD"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="widgets__item__title">Paragraph</div>
        </div>
        <div className="widgets__item" onClick={() => addNewItem('button')}>
          <div
            className="widgets__item__icon"
            onClick={() => addNewItem('image')}
          >
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.66665 16.2352L8.83331 12.0685L12.4791 15.7144L19.25 8.94352L21.3333 11.0269V4.16666H4.66665V16.2352ZM4.66665 19.1815V20.8333H14.6518L8.83331 15.0148L4.66665 19.1815ZM17.5981 20.8333H21.3333V13.9731L19.25 11.8898L13.9523 17.1875L17.5981 20.8333ZM4.66665 2.08333H21.3333C22.4839 2.08333 23.4166 3.01607 23.4166 4.16666V20.8333C23.4166 21.9839 22.4839 22.9167 21.3333 22.9167H4.66665C3.51605 22.9167 2.58331 21.9839 2.58331 20.8333V4.16666C2.58331 3.01607 3.51605 2.08333 4.66665 2.08333ZM11.9583 5.20833C13.6842 5.20833 15.0833 6.60744 15.0833 8.33333C15.0833 10.0592 13.6842 11.4583 11.9583 11.4583C10.2324 11.4583 8.83331 10.0592 8.83331 8.33333C8.83331 6.60744 10.2324 5.20833 11.9583 5.20833ZM11.9583 7.29166C11.383 7.29166 10.9166 7.75803 10.9166 8.33333C10.9166 8.90863 11.383 9.375 11.9583 9.375C12.5336 9.375 13 8.90863 13 8.33333C13 7.75803 12.5336 7.29166 11.9583 7.29166Z"
                fill="#97AACD"
              />
            </svg>
          </div>
          <div className="widgets__item__title">Button</div>
        </div>
        <div className="widgets__item" onClick={() => addNewItem('image')}>
          <div className="widgets__item__icon">
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.66665 16.2352L8.83331 12.0685L12.4791 15.7144L19.25 8.94352L21.3333 11.0269V4.16666H4.66665V16.2352ZM4.66665 19.1815V20.8333H14.6518L8.83331 15.0148L4.66665 19.1815ZM17.5981 20.8333H21.3333V13.9731L19.25 11.8898L13.9523 17.1875L17.5981 20.8333ZM4.66665 2.08333H21.3333C22.4839 2.08333 23.4166 3.01607 23.4166 4.16666V20.8333C23.4166 21.9839 22.4839 22.9167 21.3333 22.9167H4.66665C3.51605 22.9167 2.58331 21.9839 2.58331 20.8333V4.16666C2.58331 3.01607 3.51605 2.08333 4.66665 2.08333ZM11.9583 5.20833C13.6842 5.20833 15.0833 6.60744 15.0833 8.33333C15.0833 10.0592 13.6842 11.4583 11.9583 11.4583C10.2324 11.4583 8.83331 10.0592 8.83331 8.33333C8.83331 6.60744 10.2324 5.20833 11.9583 5.20833ZM11.9583 7.29166C11.383 7.29166 10.9166 7.75803 10.9166 8.33333C10.9166 8.90863 11.383 9.375 11.9583 9.375C12.5336 9.375 13 8.90863 13 8.33333C13 7.75803 12.5336 7.29166 11.9583 7.29166Z"
                  fill="#97AACD"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="25"
                    height="25"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="widgets__item__title">Image</div>
        </div>
      </div>
    </div>
  );
}

export default WidgetsArea;
