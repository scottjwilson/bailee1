import React from 'react'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Link, { graphql } from 'gatsby'
import ContactForm from '../components/Contact/contactform'
import styled from 'styled-components'


import SEO from '../components/SEO'

const privacy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Statement"
        description="best black owned business directory bailee businesses"
      />

      <Wrapper>
        <h1>Privacy Policy</h1>
        Privacy Policy of The Bailee App, inc. Effective date: July 02, 2018
        <SectionsList>
        
         <Item><a href="#type1">Types of Data collected </a></Item>
         <Item><a href="#information">Information Collection and Use</a></Item>
         <Item><a href="#type2">Types of Data Collected</a></Item>
         <Item><a href="#use">Use of Data</a></Item>
         <Item><a href="#transfer">Transfer Of Data</a></Item>
         <Item><a href="#disclosure">Disclosure Of Data</a></Item>
         <Item><a href="#security">Security Of Data</a></Item>
         <Item><a href="#service-provider">Service Providers</a></Item>
         <Item><a href="#analytics">Analytics</a></Item>
         <Item><a href="#link-other-site">Links To Other Sites</a></Item>
         <Item><a href="#children-privacy">Children's Privacy</a></Item>
         <Item><a href="#change-privacy">Changes To This Privacy Policy</a></Item>
         <Item><a href="privacy#contact-us">Contact Us</a></Item>
                                    
        </SectionsList>
        <Priv>
            <div class="lower-content">
                <h2 id="type1">Types of Data collected</h2>
                <div class="text">
                    <p>The Bailee App LLC ("us", "we", or "our") operates the website and the The Bailee App mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. This Privacy Policy for The Bailee App LLC is powered by FreePrivacyPolicy.com.</p>
                    <p> We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions.</p>
                </div>

                <h2 id="information">Information Collection and Use</h2>
                <div class="text">
                    <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                </div>

                <h2 id="type2">Types of Data Collected</h2>
                <div class="text">
                    <p><b>Personal Data</b><br/>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                    <ul>
                        <li><p>Email address</p></li>
                        <li><p>First name and last name</p></li>
                        <li><p>Phone number</p></li>
                        <li><p>Address, State, Province, ZIP/Postal code, City</p></li>
                        <li><p>Cookies and Usage Data</p></li>
                    </ul>
                    <p><b>Usage Data</b><br/> We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data. When you access the Service by or through a mobile device, this Usage Data may include information such as the type of mobile device you use, your mobile device unique ID, the IP address of your mobile device, your mobile operating system, the type of mobile Internet browser you use, unique device identifiers and other diagnostic data. Tracking &amp; Cookies Data
                        We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service. Examples of Cookies we use:</p>
                    <ul>
                        <li><p>Session Cookies. We use Session Cookies to operate our Service.</p></li>
                        <li><p>Preference Cookies. We use Preference Cookies to remember your preferences and various settings.</p></li>
                        <li><p>Security Cookies. We use Security Cookies for security purposes.</p></li>
                    </ul>
                </div>


                <h2 id="use">Use of Data</h2>
                <div class="text">
                    <p>The Bailee App LLC uses the collected data for various purposes:</p>
                    <ul>
                        <li><p>To provide and maintain the Service</p></li>
                        <li><p>To notify you about changes to our Service</p></li>
                        <li><p>To allow you to participate in interactive features of our Service when you choose to do so</p></li>
                        <li><p>To provide customer care and support</p></li>
                        <li><p>To provide analysis or valuable information so that we can improve the Service</p></li>
                        <li><p>To monitor the usage of the Service</p></li>
                        <li><p>To detect, prevent and address technical issues</p></li>
                    </ul>

                </div>


                <h2 id="transfer">Transfer Of Data</h2>
                <div class="text">
                    <p>Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction. If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. The Bailee App LLC will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.</p>
                </div>


                <h2 id="disclosure">Disclosure Of Data</h2>
                <div class="text">
                    <p><b>Legal Requirements</b><br/>The Bailee App LLC may disclose your Personal Data in the good faith belief that such action is necessary to:</p>
                    <ul>
                        <li><p>To comply with a legal obligation</p></li>
                        <li><p>To protect and defend the rights or property of The Bailee App LLC</p></li>
                        <li><p>To prevent or investigate possible wrongdoing in connection with the Service</p></li>
                        <li><p>To protect the personal safety of users of the Service or the public</p></li>
                        <li><p>To protect against legal liability</p></li>
                    </ul>
                </div>


                <h2 id="security">Security Of Data</h2>
                <div class="text">
                    <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
                </div>


                <h2 id="service-provider">Service Providers</h2>
                <div class="text">
                    <p>We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.<br/>
                        These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
                </div>


                <h2 id="analytics">Analytics</h2>
                <div class="text">
                    <p>We may use third-party Service Providers to monitor and analyze the use of our Service.</p>
                    <p><b>Google Analytics</b><br/>
                        Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network.
                        For more information on the privacy practices of Google, please visit the Google Privacy &amp; Terms web page: <a href="https://policies.google.com/privacy?hl=en">here</a>
                    </p>
                </div>


                <h2 id="link-other-site">Links To Other Sites</h2>
                <div class="text">
                    <p>Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.<br/>
                        We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
                </div>


                <h2 id="children-privacy">Children's Privacy</h2>
                <div class="text">
                    <p>Our Service does not address anyone under the age of 18 ("Children").<br/>
                        We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.</p>
                </div>


                <h2 id="change-privacy">Changes To This Privacy Policy</h2>
                <div class="text">
                    <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.<br/>
                        We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.<br/>
                        You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                    </p>
                </div>


                <h2 id="contact-us">Contact Us</h2>
                <div class="text">
                    <p>If you have any questions about this Privacy Policy, please contact us:</p>
                    <ul>
                        <li><p>By email: support@thebaileeapp.com</p></li>
                        <li><p>By visiting this page on our website: www.thebaileeapp.com</p></li>
                        <li><p>By mail: thebaileeapp@gmail.com</p></li>
                    </ul>
                </div>


            </div>
        </Priv>
      </Wrapper>
    </Layout>
  )
}

export default privacy

const Wrapper = styled.div`
  width: 70vw;
  margin: 0 auto;
`

const SectionsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`

const Item = styled.li`
  font-weight: 400;
  margin-left: 1em;
  text-transform: capitalize;

`

const Priv = styled.div`
margin-top:3rem;
`
