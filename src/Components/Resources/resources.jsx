import React, { useState, useEffect } from "react";
import { FaStar } from 'react-icons/fa'; // Import the star icon from react-icons
import "./resources.css";
import twitter from "../../Images/twitter.png";
import wallet from "../../Images/wallet.png"
import started from "../../Images/rocket-icon-logo-on-transparent-background-created-with-generative-ai-png.png"
import youtube from "../../Images/youtube.webp"
import reddit from "../../Images/reddit.png";
import documentation from "../../Images/documentation.png"
import discord from "../../Images/discord.png";
import devtools from "../../Images/devtools.png";
import cryptography from "../../Images/cryptography.png";
import { v4 as uuidv4 } from 'uuid';


export default function Resources() {
  return (
    <div className="resources-container">
        <ResourceItem
        image={started}
        title="GET STARTED"
        links={[
          {
            text: "Ethereum Development",
            href: "https://ethereum.org/developers/docs",
          },
          {
            text: "Mastering Ethereum",
            href: "https://github.com/ethereumbook/ethereumbook",
          },
        ]}
      />
      <ResourceItem
        image={documentation}
        title="DOCUMENTATION"
        links={[
          {
            text: "Ethereum Docs - Ethereum Development Documentation",
            href: "https://ethereum.org/en/developers/docs/",
          },
          {
            text: "Ethdocs - Ethereum Homestead Documentation",
            href: "https://ethereum.org/en/developers/docs/",
          },
        ]}
      />
      <ResourceItem
        image={devtools}
        title="DEV TOOLS"
        links={[
          {
            text: "Ganache - One Click Blockchain",
            href: "https://trufflesuite.com/ganache/",
          },
          {
            text: "Hardhat - Ethereum Development Environment",
            href: "https://hardhat.org/",
          },
          {
            text: "Foundry",
            href: "https://book.getfoundry.sh/",
          },
        ]}
      />
      <ResourceItem
        image={cryptography}
        title="CRYPTOGRAPHY"
        links={[
          {
            text: "Cryptocellar - Cryptology and Its History",
            href: "https://cryptocellar.org/",
          },
                    {
            text: "Awesome Cryptography",
            href: "https://github.com/sobolevn/awesome-cryptography",
          },
        ]}
      />
      <ResourceItem
        image={wallet}
        title="WALLETS"
        links={[
          {
            text: "MetaMask",
            href: "https://metamask.io/",
          },         
          {
            text: "Exodus",
            href: "https://www.exodus.com/",
          },
          {
            text: "MyEtherWallet",
            href: "https://www.myetherwallet.com/",
          },
        ]}
      />
      <ResourceItem
        image={twitter}
        title="TWITTER"
        links={[
          {
            text: "Vitalik Buterin",
            href: "https://twitter.com/VitalikButerin?s=20&t=bPOdTxT3_DMCMqzxGTeLGg",
          },
          {
            text: "Buildspace",
            href: "https://twitter.com/_buildspace",
          },
          {
            text: "Ethereum Foundation",
            href: "https://twitter.com/ethereum",
          },
          {
            text: "ETHGlobal",
            href: "https://twitter.com/ETHGlobal",
          },
          {
            text: "Ethereum.org",
            href: "https://twitter.com/ethdotorg",
          },
        ]}
      />
      <ResourceItem
        image={reddit}
        title="REDDITS"
        links={[
          {
            text: "Ethdev - Ethereum Development and DApps",
            href: "https://www.reddit.com/r/ethdev/",
          },
          {
            text: "Crypto Devs - Crypto-related Developer Discussions",
            href: "https://www.reddit.com/r/ethdev/",
          },
        ]}
      />
      <ResourceItem
        image={discord}
        title="DISCORDS"
        links={[
          {
            text: "Ethereum.org",
            href: "https://discord.gg/ethereum-org",
          },
          {
            text: "Ethereum R&D - Core Technical Ethereum",
            href: "https://discord.gg/B7XfU9JebJ",
          },
          {
            text: "ETHGlobal",
            href: "https://discord.gg/ethglobal",
          },
        ]}
      />
      <ResourceItem
        image={youtube}
        title="YOUTUBE"
        links={[
          {
            text: "Austin Griffith",
            href: "https://www.youtube.com/@austingriffith3550",
          },
          {
            text: "DeFi Developer Academy",
            href: "https://www.youtube.com/@DeFiDeveloperAcademy/videos",
          },
        ]}
      />
    </div>
  );
}

function ResourceItem({ image, title, links }) {
  return (
    <section className="resource-item">
      <div className="resource-item-header">
        <img className="resource-item-image" src={image} width="30" alt={title} />
        <h1 className="resource-item-title">{title}</h1>
      </div>
      <ul className="resource-item-links">
        {links.map((link) => (
          <li key={uuidv4()} className="resource-item-link">
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.text}
              <HeartIcon id={link.href} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function HeartIcon({ id }) {
  const [clickedHeart, setClickedHeart] = useState(false);

  useEffect(() => {
    // Load clicked state from local storage on component mount
    const savedClickedState = JSON.parse(localStorage.getItem(`heart-${id}`));
    if (savedClickedState !== null) {
      setClickedHeart(savedClickedState);
    }
  }, [id]);

  const handleHeartClick = (e) => {
    e.preventDefault();
    const newClickedState = !clickedHeart;
    setClickedHeart(newClickedState);
    // Save clicked state to local storage
    localStorage.setItem(`heart-${id}`, JSON.stringify(newClickedState));
  };

  return <FaStar className={`heart-icon ${clickedHeart ? 'clicked' : ''}`} onClick={handleHeartClick} />;
}

