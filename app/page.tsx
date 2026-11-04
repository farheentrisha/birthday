"use client";

import Image from "next/image";
import { useState } from "react";

const cats = {
  passcode: "/sticker_1_passcode%20daw.png",
  love: "/love%20you.png",
  cracked: "/hehe%20you%20cracked%20it.png",
  emotional: "/emotional.png",
  menu: "/choose%20menu.png",
  date: "/memory4.jpg",
};

const tabs = ["Home", "Our Memories", "Birthday Surprise", "Love Letter"];

export default function Home() {
  const [screen, setScreen] = useState<"gate" | "code" | "site">("gate");
  const [code, setCode] = useState("");
  const [error, setError] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [section, setSection] = useState(0);
  const [giftOpen, setGiftOpen] = useState(false);

  function unlock() {
    if (code === "2242" || code === "1111") {
      setScreen("site");
      setError(false);
    } else setError(true);
  }

  return (
    <main className="game-shell">
      <div className="pixel-sky" aria-hidden="true">
        <span>✦</span><span>♡</span><span>✧</span><span>✦</span><span>❀</span><span>✧</span>
      </div>
      <div className="game-frame">
        <header className="topbar"><span className="brand"><i className="pixel-heart">♥</i> JERRY&apos;S BIRTHDAY</span><span className="level">♡ LVL 22 · LOVE MODE ♡</span></header>

        {screen === "gate" && (
          <section className="gate-screen screen-card">
            <div className="side-sticker"><Image src={cats.passcode} alt="A cute cat holding a secret" width={230} height={230} priority /></div>
            <div className="gate-copy"><div className="eyebrow">✦ A VERY IMPORTANT QUEST ✦</div><h1>If you love me,<br /><em>click yes!</em></h1><p className="subcopy">I have a little birthday surprise<br />waiting just for you.</p>
              <div className="button-row"><button className="pixel-button yes-button" onClick={() => setScreen("code")}>YES!! <span>♥</span></button><button className="pixel-button no-button" style={{ transform: `translate(${noCount % 2 ? -28 : 28}px, ${noCount % 3 ? 10 : -8}px)` }} onMouseEnter={() => setNoCount(noCount + 1)} onClick={() => setNoCount(noCount + 1)}>No 😐</button></div>
              <div className="tiny-hint">{noCount > 0 ? "nice try. the answer is still yes ♡" : "psst... the NO button is shy"}</div>
            </div>
          </section>
        )}

        {screen === "code" && (
          <section className="code-screen screen-card">
            <div className="code-art"><Image src={cats.passcode} alt="A cat guarding the secret code" width={260} height={260} priority /><span className="sparkle">✦</span></div>
            <div className="code-copy"><div className="eyebrow">✦ TOP SECRET. JUST US. ✦</div><h1>What&apos;s our<br /><em>secret code?</em></h1><p className="subcopy">Four little numbers. You know the ones ♡</p><form onSubmit={(e) => { e.preventDefault(); unlock(); }}><input aria-label="Secret code" type="password" inputMode="numeric" maxLength={4} value={code} onChange={(e) => { setCode(e.target.value); setError(false); }} placeholder="♡  ♡  ♡  ♡" /><button className="pixel-button yes-button" type="submit">UNLOCK ♥</button></form>{error && <p className="error-message">That&apos;s not it, silly! Try our special number ♡</p>}<button className="back-link" onClick={() => setScreen("gate")}>← go back</button></div>
          </section>
        )}

        {screen === "site" && (
          <div className="birthday-site">
            <nav className="pixel-nav" aria-label="Birthday sections">{tabs.map((tab, i) => <button key={tab} className={section === i ? "active" : ""} onClick={() => { setSection(i); setGiftOpen(false); }}>{tab}</button>)}</nav>
            <div className="site-content">
              {section === 0 && <section className="welcome-panel"><div className="welcome-text"><div className="eyebrow">✧ TODAY&apos;S QUEST: CELEBRATE YOU ✧</div><h1>HAPPY BIRTHDAY,<br /><em>JERRY!</em></h1><p>Another year older, somehow still stealing my hoodies and my heart.</p><div className="stats"><span>♥ LOVE: INFINITE</span><span>★ HUGS: x999</span></div><button className="pixel-button pink-button" onClick={() => setSection(2)}>CLAIM YOUR SURPRISE →</button></div><div className="hero-cat"><Image src={cats.cracked} alt="A happy birthday cat" width={320} height={320} priority /><span className="cat-caption">certified birthday cutie</span></div><div className="floating f1">♡</div><div className="floating f2">✦</div></section>}
              {section === 1 && <section className="memory-panel"><div className="eyebrow">✦ SAVED GAME FILES ✦</div><h1>Our <em>memories</em></h1><p className="section-intro">My favorite collection: little moments with you.</p><div className="memory-grid"><article><div className="memory-image"><Image src={cats.date} alt="Cat ready for a date" width={220} height={220} /></div><span className="memory-tag">SAVE FILE 01</span><h2>Our little dates</h2><p>Any place is my favorite place when I&apos;m there with you.</p></article><article><div className="memory-image"><Image src={cats.love} alt="Cat sending love" width={220} height={220} /></div><span className="memory-tag">SAVE FILE 02</span><h2>Your silly smile</h2><p>My brain: be normal. You: smile. My brain: absolutely not.</p></article><article><div className="memory-image"><Image src={cats.emotional} alt="An emotional little cat" width={220} height={220} /></div><span className="memory-tag">SAVE FILE 03</span><h2>Us being us</h2><p>Best plot twist ever: getting to call you mine.</p></article></div></section>}
              {section === 2 && <section className="surprise-panel"><div className="eyebrow">✦ LOOT BOX: LEGENDARY ✦</div><h1>A birthday <em>surprise!</em></h1><p className="section-intro">Your reward for being ridiculously lovable. Tap to open!</p><button className={`gift-box ${giftOpen ? "opened" : ""}`} onClick={() => setGiftOpen(!giftOpen)} aria-label="Open your birthday present"><span className="gift-bow">✿</span><span className="gift-lid"/><span className="gift-body">{giftOpen ? "♥" : "?"}</span></button>{giftOpen ? <div className="reward"><h2>YOU WIN: ONE WHOLE GIRLFRIEND!</h2><p>Redeem for unlimited kisses, hugs, and me stealing a bite of your food. No expiration date ♡</p><Image src={cats.menu} alt="A very excited birthday cat" width={210} height={210} /></div> : <p className="tiny-hint">100% guaranteed to contain love</p>}</section>}
              {section === 3 && <section className="letter-panel"><div className="letter-art"><Image src={cats.love} alt="A cat sending you love" width={240} height={240} /><span>♡</span></div><div className="letter"><div className="eyebrow">✦ MAIL FROM YOUR FAVORITE GIRL ✦</div><h1>To my <em>birthday boy,</em></h1><p>Happy birthday to the person who makes every ordinary day feel like the best level in the game. You&apos;re my favorite laugh, my safest place, and the only person I&apos;d share my fries with (after a very brief internal debate).</p><p>I hope this next trip around the sun brings you every good thing you deserve. I&apos;ll be right here cheering for you, loving you, and reminding you that you are, in fact, very cute.</p><p className="signoff">All my love, always ♡<br /><strong>Your girlfriend (the chaotic one)</strong></p><div className="final-wish">HAPPY BIRTHDAY, LOVE! ✦ ♥ ✦</div></div></section>}
            </div>
            <footer className="site-footer"><span>♡ MADE WITH TOO MUCH LOVE ♡</span><span>© Created by Farheen Mahjarin Trisha · November 5, 2026</span></footer>
          </div>
        )}
        <footer className="frame-footer"><span>♥ PLAYER 1: YOUR GIRL</span><span>INSERT KISS TO CONTINUE <b>♥</b></span></footer>
      </div>
      <div className="ground" aria-hidden="true"><span>✿</span><span>✦</span><span>♡</span><span>✿</span><span>✦</span><span>♡</span><span>✿</span></div>
    </main>
  );
}
