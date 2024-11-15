export default function Page(){
    return(
        <div>
            Category Page Id
        </div>
    )
}

// const { category, id } = useParams();
//   const [showEnquiryForm, setShowEnquiryForm] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await apiService.sendWhatsAppMessage({
//         type: 'Product Enquiry',
//         ...formData
//       });
//       toast.success('Enquiry sent! We will contact you shortly.', {
//         icon: '👋',
//         duration: 5000
//       });
//       setShowEnquiryForm(false);
//       setFormData({ name: '', email: '', phone: '', message: '' });
//     } catch (error) {
//       toast.error('Failed to send enquiry. Please try again.');
//     }
//   };