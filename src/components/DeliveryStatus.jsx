const DeliveryStatus = ({ status }) => {
    return (
      <div className="mt-6 p-4 border rounded">
        <h2 className="text-2xl font-bold mb-4">Delivery Status</h2>
        <p>{status}</p>
      </div>
    );
  };
  
  export default DeliveryStatus;
  