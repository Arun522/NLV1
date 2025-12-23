import { WHY_CHOOSE_US } from '../../constants';

const WhyChooseUs = ({ title = "Why Choose NextMaze Tech?" }) => {
  return (
    <div className="div-block-35 mini" style={{
      textAlign: 'center', 
      padding: '40px 20px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '10px', 
      margin: '40px 20px'
    }}>
      <h3 style={{
        fontSize: '24px', 
        marginBottom: '30px', 
        color: '#456441', 
        textAlign: 'center'
      }}>
        {title}
      </h3>
      <div style={{
        display: 'flex', 
        justifyContent: 'space-around', 
        alignItems: 'flex-start', 
        gap: '30px', 
        maxWidth: '1000px', 
        margin: '0 auto', 
        flexWrap: 'wrap'
      }}>
        {WHY_CHOOSE_US.map((item, index) => (
          <div key={index} style={{
            textAlign: 'center', 
            flex: '1', 
            minWidth: '250px'
          }}>
            <div style={{fontSize: '40px', marginBottom: '15px'}}>{item.icon}</div>
            <h4 style={{
              fontSize: '18px', 
              marginBottom: '10px', 
              color: '#456441'
            }}>
              {item.title}
            </h4>
            <p style={{fontSize: '16px', color: '#666'}}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;