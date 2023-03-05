import { useEffect, useState } from 'react'
import {
    TelegramShareButton,
    TwitterShareButton,
  } from "react-share";
  import {
    TelegramIcon,
    TwitterIcon,
  } from "react-share";
  import { summon_reward } from '../utils/summon';
  
  export default function SharePage() {
    const [twitterShared, setTwitterShared] = useState(0);

    return (
    <div>
      <h1>Share on Social Media to Unlock</h1>
      <TwitterShareButton
            url="https://mobile.twitter.com/G7_DAO"
            title="I'm unlocking achievements on Summon with devrel-lens!"
            onShareWindowClose={() => {
                summon_reward('0xDeD614342D9C88aF0242D9C9a13224A105342076','twitter_shared','358367398093389910');
                alert("Summon twitter_shared");
            }}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <TelegramShareButton
            url="https://mobile.twitter.com/G7_DAO"
            title="I'm unlocking achievements on Summon with devrel-lens!"
            onShareWindowClose={() => {
                summon_reward('0xDeD614342D9C88aF0242D9C9a13224A105342076','telegram_shared','358367398093389910')
                alert("Summon telegram_shared");
            }}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>


    </div>
    );
}
