import React from "react";
import "./resources.css";
import twitter from "../../Images/twitter.png";
import reddit from "../../Images/reddit.png";
import documentation from "../../Images/documentation.jpeg";
import discord from "../../Images/discord.png";
import devtools from "../../Images/devtools.jpg";
import cryptography from "../../Images/cryptography.png";

export default function Resources() {
  return (
    <div className="resources-container">
      <ResourceItem
        image={documentation}
        title="Documentation"
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
            text: "Metamask - Blockchain Wallet",
            href: "https://metamask.io/",
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
            text: "Ethereum - Ethereum Main",
            href: "https://discord.com/invite/CetY6Y4",
          },
          {
            text: "Ethereum R&D - Core Technical Ethereum",
            href: "https://discord.gg/gK3dXFhM",
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
        {links.map((link, index) => (
          <li key={index} className="resource-item-link">
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
