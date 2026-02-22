import React from 'react'
import './CSS/Refund.css'


export const Refund = () => {
  return (
    <div className="refund-container">
      <h1>Refund Policy</h1>
      <hr className="divider" />
      <div className="section section-flex">
        <h3 className="legal-disc">A legal disclaimer</h3>
        <p className="lega">
          The explanations and information provided on this page are only general and high-level explanations and information on how to write your own document of a Refund Policy. You should not rely on this article as legal advice or as recommendations regarding what you should actually do, because we cannot know in advance what are the specific refund policies that you wish to establish between your business and your customers. We recommend that you seek legal advice to help you understand and to assist you in the creation of your own Refund Policy.
        </p>
      </div>
      <hr className="divider" />
      <div className="section section-flex">
        <h3 className="legal-disc">Refund Policy - The basics</h3>
        <p className="lega">
          Having said that, a Refund Policy is a legally binding document that is meant to establish the legal relations between you and your customers regarding how and if you will provide them with a refund. Online businesses selling products are sometimes required (depending on local laws and regulations) to present their product return policy and refund policy. In some jurisdictions, this is needed in order to comply with consumer protection laws. It may also help you avoid legal claims from customers that are not satisfied with the products they purchased.
        </p>
      </div>
      <hr className="divider" />
      <div className="section section-flex">
        <h3 className="legal-disc">What to include in the Refund Policy</h3>
        <p className="lega">
          Generally speaking, a Refund Policy often addresses these types of issues: the timeframe for asking for a refund; will the refund be full or partial; under which conditions will the customer receive a refund; and much, much more.
        </p>
      </div>
    </div>

  )
}


export default Refund;