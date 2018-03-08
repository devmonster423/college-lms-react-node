import React from 'react';
import styled from 'styled-components';

export const SVG = styled.svg`
  height: 45px;
  width: auto;
`;

export default () => (
  <SVG
    width="46"
    height="46"
    viewBox="0 0 46 46"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <filter
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox"
        id="filter-1"
      >
        <feoffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1">
          <fegaussianblur
            stdDeviation=".5"
            in="shadowOffsetOuter1"
            result="shadowBlurOuter1"
          >
            <fecolormatrix
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.168 0"
              in="shadowBlurOuter1"
              result="shadowMatrixOuter1"
            >
              <feoffset in="SourceAlpha" result="shadowOffsetOuter2">
                <fegaussianblur
                  stdDeviation=".5"
                  in="shadowOffsetOuter2"
                  result="shadowBlurOuter2"
                >
                  <fecolormatrix
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.084 0"
                    in="shadowBlurOuter2"
                    result="shadowMatrixOuter2"
                  >
                    <femerge>
                      <femergenode in="shadowMatrixOuter1">
                        <femergenode in="shadowMatrixOuter2">
                          <femergenode in="SourceGraphic" />
                        </femergenode>
                      </femergenode>
                    </femerge>
                  </fecolormatrix>
                </fegaussianblur>
              </feoffset>
            </fecolormatrix>
          </fegaussianblur>
        </feoffset>
      </filter>
      <rect id="path-2" width="40" height="40" rx="2" />
    </defs>
    <g id="Google-Button" fill="none" fillRule="evenodd">
      <g id="btn_google_light_normal" transform="translate(-1 -1)">
        <g id="button" transform="translate(4 4)" filter="url(#filter-1)">
          <g id="button-bg">
            <use fill="#FFF" xlinkHref="#path-2" />
            <use xlinkHref="#path-2" />
            <use xlinkHref="#path-2" />
            <use xlinkHref="#path-2" />
          </g>
        </g>
        <g id="logo_googleg_48dp" transform="translate(15 15)">
          <path
            d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
            id="Shape"
            fill="#4285F4"
          />
          <path
            d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
            id="Shape"
            fill="#34A853"
          />
          <path
            d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
            id="Shape"
            fill="#FBBC05"
          />
          <path
            d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
            id="Shape"
            fill="#EA4335"
          />
          <path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape" />
        </g>
      </g>
    </g>
  </SVG>
);
