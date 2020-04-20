import Race from 'Components/tasks/race';
import raceData1 from 'Components/tasks/race/source/1.json';
import raceData2 from 'Components/tasks/race/source/2.json';
import raceData3 from 'Components/tasks/race/source/3.json';
import raceData4 from 'Components/tasks/race/source/4.json';
import raceData5 from 'Components/tasks/race/source/5.json';

import Singing from 'Components/tasks/singing';
import singingData from 'Components/tasks/singing/source/1.json';

import Rebus from 'Components/tasks/rebus';
import rebusCrowPasta from 'Img/rebuses/crow-pasta.jpg';
import rebusScooter from 'Img/rebuses/scooter.png';
import rebusMittens from 'Img/rebuses/mittens.png';
import rebusPolice from 'Img/rebuses/police.png';
import rebusKingCrone from 'Img/rebuses/king-crone.png';

import Anagram from 'Components/tasks/anagram';
import anagramData from 'Components/tasks/anagram/source/1.json';
import anagramData2 from 'Components/tasks/anagram/source/2.json';

import Texts from 'Components/tasks/texts';
import textsData from 'Components/tasks/texts/source/1.json';
import textsData2 from 'Components/tasks/texts/source/2.json';
import textsData3 from 'Components/tasks/texts/source/3.json';
import textsData4 from 'Components/tasks/texts/source/4.json';
import textsData5 from 'Components/tasks/texts/source/5.json';
import textsData6 from 'Components/tasks/texts/source/6.json';

import MissedWord from 'Components/tasks/missed-word';
import missedWordData from 'Components/tasks/missed-word/source/1.json';
import missedWordData2 from 'Components/tasks/missed-word/source/2.json';

import SchulteTable from 'Components/tasks/schulte-table';
import schulteTableData from 'Components/tasks/schulte-table/source/1.json';
import schulteTableData2 from 'Components/tasks/schulte-table/source/2.json';
import schulteTableData3 from 'Components/tasks/schulte-table/source/3.json';
import schulteTableData4 from 'Components/tasks/schulte-table/source/4.json';

import BrainBoxCard from 'Components/tasks/brainbox-card';
import helicopterFront from 'Img/brainbox-cards/helicopter/front.png';
import helicopterBack from 'Img/brainbox-cards/helicopter/back.png';

import RebusSlider from 'Components/tasks/rebus-slider';
import r11 from 'Img/rebus-card/1.1.png';
import r12 from 'Img/rebus-card/1.2.png';
import r21 from 'Img/rebus-card/2.1.png';
import r22 from 'Img/rebus-card/2.2.png';
import r31 from 'Img/rebus-card/3.1.png';
import r32 from 'Img/rebus-card/3.2.png';
import r41 from 'Img/rebus-card/4.1.png';
import r42 from 'Img/rebus-card/4.2.png';
import r51 from 'Img/rebus-card/5.1.png';
import r52 from 'Img/rebus-card/5.2.png';
import r61 from 'Img/rebus-card/6.1.png';
import r62 from 'Img/rebus-card/6.2.png';
import r71 from 'Img/rebus-card/7.1.png';
import r72 from 'Img/rebus-card/7.2.png';

import DoubleSlider from 'Components/tasks/double-slider';
import d1 from 'Img/double/1.png';
import d2 from 'Img/double/2.png';
import d3 from 'Img/double/3.png';
import d4 from 'Img/double/4.png';
import d5 from 'Img/double/5.png';
import d6 from 'Img/double/6.png';

import MathCars from 'Components/tasks/math-cars';
import mc1 from 'Img/math-cars/1.png';
import mc2 from 'Img/math-cars/2.png';
import mc3 from 'Img/math-cars/3.png';
import mc4 from 'Img/math-cars/4.png';
import mc5 from 'Img/math-cars/5.png';
import mc6 from 'Img/math-cars/6.png';

import HiddenWords from 'Components/tasks/hidden-words';
import hwData from 'Components/tasks/hidden-words/source/1.json';

import Semaphore from 'Components/tasks/semaphore';
import semaphoreData from 'Components/tasks/semaphore/source/1.json';

import Ticker from 'Components/tasks/ticker';
import tickerData from 'Components/tasks/ticker/source/1.json';
import tickerData2 from 'Components/tasks/ticker/source/2.json';

export default [
  {
    day: 'Вступне заняття',
    tasks: [
      {
        Component: Race,
        data: raceData1,
      },
      {
        Component: BrainBoxCard,
        data: {
          front: helicopterFront,
          back: helicopterBack,
        },
      },
    ],
  },
  {
    day: 'День 1',
    tasks: [
      {
        Component: Race,
        data: raceData2,
      },
      {
        Component: Singing,
        data: singingData,
      },
      {
        Component: Rebus,
        data: [rebusCrowPasta],
      },
      {
        Component: Anagram,
        data: anagramData,
      },
      {
        Component: Texts,
        data: textsData,
      },
      {
        Component: MissedWord,
        data: missedWordData,
      },
      {
        Component: SchulteTable,
        data: schulteTableData,
      },
    ],
  },
  {
    day: 'День 2',
    tasks: [
      {
        Component: Race,
        data: raceData3,
      },
      {
        Component: DoubleSlider,
        data: [
          d1,
          d2,
          d3,
          d4,
          d5,
          d6,
        ],
      },
      {
        Component: SchulteTable,
        data: schulteTableData,
      },
      {
        Component: Texts,
        data: textsData2,
      },
      {
        Component: RebusSlider,
        data: [
          {
            front: r11,
            back: r12,
          },
          {
            front: r21,
            back: r22,
          },
          {
            front: r31,
            back: r32,
          },
          {
            front: r41,
            back: r42,
          },
          {
            front: r51,
            back: r52,
          },
          {
            front: r61,
            back: r62,
          },
          {
            front: r71,
            back: r72,
          },
        ],
      },
    ],
  },
  {
    day: 'День 3',
    tasks: [
      {
        Component: Race,
        data: raceData4,
      },
      {
        Component: Ticker,
        data: tickerData,
      },
      {
        Component: Semaphore,
        data: semaphoreData,
      },
      {
        Component: Texts,
        data: textsData3,
      },
      {
        Component: SchulteTable,
        data: schulteTableData2,
      },
      {
        Component: MathCars,
        data: [
          mc1,
          mc2,
          mc3,
          mc4,
          mc5,
          mc6,
        ],
      },
      {
        Component: HiddenWords,
        data: hwData,
      },
    ],
  },
  {
    day: 'День 4',
    tasks: [
      {
        Component: Race,
        data: raceData5,
      },
      {
        Component: Rebus,
        data: [
          rebusKingCrone,
        ],
      },
      {
        Component: Ticker,
        data: tickerData2,
      },
      {
        Component: Semaphore,
        data: semaphoreData,
      },
      {
        Component: Texts,
        data: textsData4,
      },
      {
        Component: Semaphore,
        data: semaphoreData,
      },
      {
        Component: Rebus,
        data: [
          rebusScooter,
          rebusMittens,
          rebusPolice,
        ],
      },
      {
        Component: SchulteTable,
        data: schulteTableData3,
      },
    ],
  },
  {
    day: 'Домашнє завдання на вихідні',
    tasks: [
      {
        Component: Texts,
        data: textsData5,
      },
    ],
  },
  {
    day: '18.04.2020',
    tasks: [
      {
        Component: Race,
        data: raceData1,
      },
      {
        Component: Rebus,
        data: [rebusCrowPasta],
      },
      {
        Component: Ticker,
        data: tickerData,
      },
      {
        Component: Semaphore,
        data: semaphoreData,
      },
      {
        Component: Texts,
        data: textsData4,
      },
      {
        Component: Semaphore,
        data: {
          ...semaphoreData,
          delay: [1000, 2000],
        },
      },
      {
        Component: Rebus,
        data: [
          rebusScooter,
          rebusMittens,
          rebusPolice,
        ],
      },
      {
        Component: SchulteTable,
        data: schulteTableData3,
      },
    ],
  },
  {
    day: 'День 5',
    tasks: [
      {
        Component: Race,
        data: raceData2,
      },
      {
        Component: Rebus,
        data: [rebusKingCrone],
      },
      {
        Component: Anagram,
        data: anagramData2,
      },
      {
        Component: Semaphore,
        data: semaphoreData,
      },
      {
        Component: Texts,
        data: textsData6,
      },
      {
        Component: Semaphore,
        data: {
          ...semaphoreData,
          delay: [1000, 2000],
        },
      },
      {
        Component: MissedWord,
        data: missedWordData2,
      },
      {
        Component: SchulteTable,
        data: schulteTableData4,
      },
    ],
  },
];
