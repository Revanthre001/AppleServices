export default function Page(){
 return(
    <div>
        Service Details
    </div>
 )   
}

// const { id } = useParams();
//   const [showEnquiryForm, setShowEnquiryForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     deviceType: '',
//     issue: '',
//     photos: [] as File[],
//     preferredDate: ''
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await apiService.sendWhatsAppMessage({
//         type: 'Service',
//         ...formData
//       });
//       toast.success('Request sent! We will contact you shortly.', {
//         icon: '🔧',
//         duration: 5000
//       });
//       setShowEnquiryForm(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         deviceType: '',
//         issue: '',
//         photos: [],
//         preferredDate: ''
//       });
//     } catch (error) {
//       toast.error('Failed to send request. Please try again.');
//     }
//   };