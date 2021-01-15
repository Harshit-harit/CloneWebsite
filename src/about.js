import React from 'react'
import { Row, Col,Card,CardBody,CardText,CardDeck } from 'reactstrap';


export default function AboutFeature() {
    const stats = [{
        'bgColor':'#5C401F',
        'content':'Horticulture contributes to 12.4% of the agriculture GDP of the state'
    },{
        'bgColor':'#BA821A',
        'content':'Extensive sector infrastructure supported by the Government'
    },{
        'bgColor':'#fe9900',
        'content':'Dedicated Research Centres'
    },{
        'bgColor':'#f97100',
        'content':'State Promotes Organic Farming'
    },{
        'bgColor':'#97bd00',
        'content':'Dedicated Agri Export Strategy'
    },{
        'bgColor':'#005e24',
        'content':'Attractive Fiscal Incentives'
    },{
        'bgColor':'#5aa100',
        'content':'Safety & Ease of Doing Business'
    },{
        'bgColor':'#ab0f0f',
        'content':'Peaceful & Competitive Labour'
    },{
        'bgColor':'#613f17',
        'content':'Quality Low Cost Power'
    },]

  const StatsTwo=[
        {
            'bgColor':'#f97100',
            'content':'FDI in Food Processing Sector is USD 8 Bn. (INR 5.6k Cr)'
        },{
            'bgColor':'#97bd00',
            'content':'GVA of Food Processing Sector is USD 27.4 Bn (INR 1.92 L Cr); CAGR 9%'
        },{
            'bgColor':'#BA821A',
            'content':'By 2030, India would be the 3rd largest consumer market'
        },{
            'bgColor':'#fe9900',
            'content':`By 2023, India's Food Retail to touch USD 827 Bn. Going up to 70% from 2017`
        }
    ]

 
    return (
        <div>
            <section className='section'>
            <div className='container'>
            <Row>
                <Col lg='6'>
                <div className='big-heading-2 font-weight-bold fnt-green'> Farmkrisp </div>
                <div className='title-border-caption '></div>
                <p className='mt-4 f-16 font-weight-light text-left'>
                Agro-Industry has always been an evergreen and thriving sector and in the new age it is providing bountiful opportunities to a myriad of businessmen, along with private and
                public agencies. So far, various boards and government institutions has made most out of this industry and seeing it's never ceasing demand, new age businessmen are also
                entering this area, making it even more promising, high in potential and organized.
                </p>
                <p className='mt-4 f-16 font-weight-light mb-4 text-left'>

                FarmKrisp is willing to take this opportunity and also benefit the society and its farmers. Coming from farming roots and attaining in-depth knowledge of agriculture, combined
                with experience in retail sector, FarmKrisp creates a unique business model that creates long lasting and profitable relationships.
                </p>
                </Col>
               
            </Row>
            </div>
            </section>



            
</div>
    )
}
