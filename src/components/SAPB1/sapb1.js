import './sapb1.css'
import { useEffect } from 'react'

const SAP = () => {

    useEffect(() => {
        document.title = 'SAP - KPH Infotech Pvt Ltd'
    })

    return(
        <>
            <div className='sap-container'>
            {/* SAP Top Content Container */}
                <div className='sap-top-box'>
                    <div className=''>
                        <h1 className='secondary-heading'>About SAP Business One</h1>
                        <p className='sap-para-content'>
                        Discover a single, affordable solution for managing your entire company – 
                        from sales and customer relationships to financials and operations. SAP 
                        products are utilized by tens of thousands of firms worldwide and this ERP 
                        software is particularly designed for small and medium size businesses.
                        </p>
                    </div>
                    <div className='sap-erp-box'>
                        <div className='sap-erp-content-box'>
                            <h1 className='secondary-heading erp-integration-heading'>Why SAP ERP?</h1>
                            <p className='sap-para-content'>
                            SAP Business One is a full blown ERP solution, perfectly designed to let your 
                            medium-size business & subsidaries run smoothly – even in the most exotic locations
                            around the planet. SAP B1 is an integrated, affordable business management 
                            application. It’s a single system that can automate critical business operations.
                            </p>
                            <h1 className='secondary-heading erp-integration-heading'>ERP Integration</h1>
                            <p className='sap-para-content'>
                            Enables out-of-the-box integration of SAP B1 and SAP ERP or SAP BI or 
                            Any 3rd party CRM and legacy systems.
                            </p>
                        </div>
                        <img className='erp-image' src='http://183.82.120.80:9999/sap-erp-300x300.jpg' alt='sap erp' />
                    </div>

                </div>

                {/* SAP Middle Content Container */}

                <div className='sap-middle-container'>
                    <img className='sap-bussiness-image' src='http://183.82.120.80:9999/images.png' alt='sap bussiness' />
                    <div>
                        <h1 className='secondary-heading'>SAP Business One: Key Features</h1>
                        <h2>Financial</h2>
                        <ul className='sap-content-list-items'>
                            <li>Financial management – Improve margins, reduce errors, and drive more profitable decision-making.</li>
                            <li>Accounting – Automate fundamental accounting processes.</li>
                            <li>Controlling – Manage cash flow, track fixed assets, control budgets, and monitor project costs.</li>
                            <li>Fixed-asset management – Track and manage physical assets and equipment.</li>
                            <li>Banking and reconciliation – Process reconciliations, bank statements, and payments.</li>
                            <li>Financial reporting and analysis – Create standard or customized reports from real-time data.</li>
                            <li>Sales and customer management – Oversee the entire sales process and customer lifecycle.</li>
                        </ul>
                        <h2>Sales and Service</h2>
                        <ul className='sap-content-list-items'>
                            <li>Sales and opportunity management – Track sales opportunities and lead activities throughout the sales cycle.</li>
                            <li>Marketing campaign management – Create, manage, and analyze marketing activities.</li>
                            <li>Customer management – Store all customer data in one place by synchronizing and managing customer contacts in Microsoft Outlook.</li>
                            <li>Service management – Manage warranty contracts and service agreements.</li>
                            <li>Mobile sales – Empower your sales organization to manage information on the move.</li>
                        </ul>

                        <h2>Reporting & Real-time Analysis</h2>
                        <ul className='sap-content-list-items'>
                             <li>Reporting – Generate integrated reports with real-time data.</li>
                             <li>Business intelligence – Create timely and accurate reports based on company-wide data.</li>
                             <li>Interactive analysis – Integrate SAP Business One with standard Microsoft Excel functionalities.</li>
                             <li>Drag and relate – Drill down into data and use search assistance and workflow-based alerts.</li>
                             <li>Dashboards and reports – Design intuitive, interactive dashboards and reports.</li>
                             <li>Real-time analytics – Access information faster and evaluate it with powerful analytics.</li>
                        </ul>

                        <h2>Report and Analytics</h2>
                        <ul className='sap-content-list-items'>
                            <li>Purchasing and inventory control – Optimize purchasing practices and control costs.</li>
                            <li>Procurement – Streamline procurement processes.</li>
                            <li>Warehouse – Synchronize goods receipts and inventory levels in real-time.</li>
                        </ul>

                    </div>
                </div>

                <div className='sap-bottom-container'>
                    <div className='sap-bottom-content-container'>
                        <h1 className='secondary-heading'>DEVELOPMENT WITH SAP BUSINESS ONE</h1>
                        <p className='sap-para-content'>SAP Business One Software Development Kit (SDK) 
                        provides a comprehensive set of tools for professional software developers to 
                        Maximize your IT investment by tailoring SAP B1 to your particular needs, 
                        streamline and automate processes, integrate external applications.</p>

                        <h1 className='secondary-heading'>SAP B1 Implementation</h1>
                        <ol>
                            <li>We adopts the “Accelerated SAP methodology“.</li>
                            <li>We offer proven, replicable and successful approach to 
                            implementing SAP solutions across industries and customer environments.</li>
                            <li>We provide content, tools, and expertise from numerous implementations</li>
                        </ol>

                    </div>
                    <img className='sap-bottom-container-image' src='http://183.82.120.80:9999/Image_Integration_Framework%20(1).jpg' alt='sap solutions' />
                </div>

                <div className='sap-logos-container'>
                    <h1 className='secondary-heading'>Implementation Methodology</h1>

                    <div className='logos-box'>

                        <div className='individual-logo-box'>
                        <img className='sap-logo' src='http://183.82.120.80:9999/ICON-1.png' alt='sap project' />
                        <h2 className='sap-logo-name'>Project Kick-Off</h2>
                        </div>

                        <div className='individual-logo-box'>
                        <img className='sap-logo' src='http://183.82.120.80:9999/IICON-2.png' alt='sap scope' />
                        <h2 className='sap-logo-name'>Scope Finalization</h2>
                        </div>

                        <div className='individual-logo-box'>
                        <img className='sap-logo' src='http://183.82.120.80:9999/ICON-3.png' alt='sap deployment' />
                        <h2 className='sap-logo-name'>Deployment / Installations</h2>
                        </div>
                    </div>

                    <div className='logos-box'>
                        <div className='individual-logo-box'>
                        <img className='sap-logo' src='http://183.82.120.80:9999/ICON-4.png' alt='sap icon' />
                        <h2 className='sap-logo-name'>UAT(User Acceptance <br/> Testing and Bug Fixing)</h2>
                        </div>

                        <div className='individual-logo-box'>
                        <img className='sap-logo' src='http://183.82.120.80:9999/ICON-4.png' alt='sap icon' />
                        <h2 className='sap-logo-name'>Go Live and Roll Out</h2>
                        </div>

                        <div className='individual-logo-box'>
                        <img className='sap-logo' src='http://183.82.120.80:9999/ICON-4.png' alt='sap icon' />
                        <h2 className='sap-logo-name'>Post Go Live Support</h2>
                        </div>
                    </div>

                    <div className='sap-company-logos-container'>
                        <h1 className='secondary-heading our-clients-heading'>Our Clients</h1>

                        <div className='logos-box'>

                            <img className='company-logo intron-logo' src='http://183.82.120.80:9999/ILSPL-LOGO.png' alt='intron' />
                            <img className='company-logo' src='http://183.82.120.80:9999/elspl-logo.jpg' alt='exome' />
                            <img className='company-logo bio-me-logo' src='http://183.82.120.80:9999/BIOME-LOGO.png' alt='biome' />

                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default SAP