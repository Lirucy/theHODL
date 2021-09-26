import React, { Component } from "react";
import "../App.css";

class History extends Component {
  render() {
    return (
      <div>
        <div className="divider">
          <h2 className="divider-text">History</h2>
        </div>
        <div className="history-body">
          <div className="btc-history">
            <p>
              Bitcoin, first released as open-source software in 2009, was
              invented by the mysterious Satoshi Nakamoto in 2008 and is the
              first decentralized cryptocurrency. The first bitcoin transaction
              took place between Nakamoto and an early adopter of bitcoin in
              January 2009. Since the release of bitcoin, many other
              cryptocurrencies have been created. You can read more about
              cryptocurrency via Wikipedia, source:{" "}
              <a
                href="https://en.wikipedia.org/wiki/Cryptocurrency"
                target="_blank"
                rel="noreferrer"
                className="wiki"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className="crypto-explain">
            <p>
              A cryptocurrency, crypto-currency, or crypto is a binary data
              designed to work as a medium of exchange wherein individual coin
              ownership records are stored in a ledger existing in a form of a
              computerized database using strong cryptography to secure
              transaction records, to control the creation of additional coins,
              and to verify the transfer of coin ownership. Some crypto schemes
              use validators to maintain the cryptocurrency. In a proof-of-stake
              model, owners put up their tokens as collateral. In return, they
              get authority over the token in proportion to the amount they
              stake. Generally, these token stakers get additional ownership in
              the token over time via network fees, newly minted tokens or other
              such reward mechanisms. Cryptocurrency does not exist in physical
              form (like paper money) and is typically not issued by a central
              authority. Cryptocurrencies typically use decentralized control as
              opposed to a central bank digital currency (CBDC). When a
              cryptocurrency is minted or created prior to issuance or issued by
              a single issuer, it is generally considered centralized. When
              implemented with decentralized control, each cryptocurrency works
              through distributed ledger technology, typically a blockchain,
              that serves as a public financial transaction database.
            </p>
          </div>
          <div className="pizza">
            <h3 className="most-expensive">
              The most expensive pizza in the world!
            </h3>
            <p>
              About 11 years ago on May 22, Laszlo Hanyecz, one of the early
              adopters of the newfangled cryptocurrency that had just been coded
              into existence, purchased a pair of Papa Johns pizza pies using
              10,000 bitcoins.The two pizzas currently total a value of $400
              million. Making it the most expensive pizza purchase in history.
              At the time of purchase, Hanyecz's 10,000 BTC was worth a mere
              $40. You can read more about the worlds most expensive pizzas via
              Yahoo, source:{" "}
              <a
                href="https://www.yahoo.com/now/bitcoin-pizza-day-sees-first-112000121.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAACLcHVQvZbenPIAn7bzHWMcv6MSCUcdKq06qtfDYjjOmNXLWqeAToY4ttdaNQfCEhIthBlf5BEcl3AEAcMMlqk3N-mkdglny1kX0Uzf_HN6Jd3Hi3IHi67UnEL1NeBpCXdqsHQSyxGXvOdbNLqYUwihB1fpeSNnkTHO0Gov0a5wB"
                target="_blank"
                rel="noreferrer"
                className="yahoo"
              >
                here
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
