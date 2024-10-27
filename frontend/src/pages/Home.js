// import React, { useState, useEffect } from 'react';
// import SymptomDropdown from './SymptomDropdown.js';
// import axios from "axios";
// import Footer from '../components/Footer';

// const Home = () => {
//   const [symptoms, setSymptoms] = useState('');
//   const [Results, setResult] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [selectedSymptoms, setSelectedSymptoms] = useState([]);
//   const [suggestions, setSuggestions] = useState('');
//   const [showFooter, setShowFooter] = useState(true);
//   const [selectedResult, setSelectedResult] = useState(''); // Track the selected result section

//   const handleSpeechRecognition = () => {
//     if (!('webkitSpeechRecognition' in window)) {
//       alert('Speech recognition not supported in this browser.');
//       return;
//     }

//     const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//     recognition.lang = 'en-US';
//     recognition.interimResults = false;
//     recognition.maxAlternatives = 1;

//     recognition.onstart = () => {
//       setIsListening(true);
//     };

//     recognition.onresult = (event) => {
//       const speechResult = event.results[0][0].transcript;
//       setSymptoms((prev) => `${prev} ${speechResult}`.trim());
//     };

//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     recognition.start();
//   };

//   const handleSymptomChange = (selectedOptions) => {
//     setSelectedSymptoms(selectedOptions);
//     setSymptoms(selectedOptions.map(option => option.label).join(', '));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/api/submit", {
//         symptoms,
//       });
//       setResult(response.data);
//     } catch (error) {
//       console.error("Error submitting the form", error);
//     }
//   };

//   const recommendations = suggestions ? suggestions : symptoms;

//   // Handle scroll event to hide footer at the bottom of the page
//   useEffect(() => {
//     const handleScroll = () => {
//       if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         setShowFooter(false);
//       } else {
//         setShowFooter(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const renderSelectedResult = () => {
//     switch (selectedResult) {
//       case 'Disease':
//         return <p>{Results.predicted_disease}</p>;
//       case 'Description':
//         return <p>{Results.description}</p>;
//       case 'Precaution':
//         return <ul>{Results.precautions[0].map((item, index) => <li key={index}>{item}</li>)}</ul>;
//       case 'Medications':
//         return <ul>{Results.medications[0].split(', ').map((item, index) => <li key={index}>{item}</li>)}</ul>;
//       case 'Workouts':
//         return <ul>{Results.workout.map((item, index) => <li key={index}>{item}</li>)}</ul>;
//       case 'Diets':
//         return <ul>{Results.diets[0].split(', ').map((item, index) => <li key={index}>{item}</li>)}</ul>;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div style={styles.pageContainer}>
//       <div style={styles.contentWrapper}>
//         <div style={styles.mainSection}>
//           <h1 style={styles.header}>Health Care Center</h1>
//           <div style={styles.card}>
//             <SymptomDropdown setSuggestions={setSuggestions} />
//             <input
//               type="text"
//               id="symptoms"
//               value={symptoms}
//               onChange={(e) => setSymptoms(e.target.value)}
//               placeholder="Type symptoms such as itching, sleeping, aching etc."
//               style={styles.input}
//             />
//             <button
//               onClick={handleSpeechRecognition}
//               style={styles.button}
//               disabled={isListening}
//             >
//               {isListening ? 'Listening...' : 'Start Speech Recognition'}
//             </button>
//             <button style={styles.button} onClick={handleSubmit}>Predict</button>
//             <div style={styles.recommendations}>
//               <h3 style={styles.recommendationHeader}>Recommendations:</h3>
//               <p style={styles.recommendationText}>{recommendations}</p>
//             </div>
//           </div>
//         </div>

//         <div style={styles.resultsSection}>
//           <h2 style={styles.resultsHeader}>Our AI System Results</h2>
//           <div style={styles.buttonGroup}>
//             <button style={styles.resultButton} onClick={() => setSelectedResult('Disease')}>Disease</button>
//             <button style={styles.resultButton} onClick={() => setSelectedResult('Description')}>Description</button>
//             <button style={styles.resultButton} onClick={() => setSelectedResult('Precaution')}>Precaution</button>
//             <button style={styles.resultButton} onClick={() => setSelectedResult('Medications')}>Medications</button>
//             <button style={styles.resultButton} onClick={() => setSelectedResult('Workouts')}>Workouts</button>
//             <button style={styles.resultButton} onClick={() => setSelectedResult('Diets')}>Diets</button>
//           </div>

//           {/* Display the selected result */}
//           <div style={styles.resultCard}>
//             {renderSelectedResult()}
//           </div>
//         </div>
//       </div>

//       {/* Conditionally render the footer based on the scroll position */}
//       {showFooter && <Footer />}
//     </div>
//   );
// };

// const styles = {
//   pageContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//     marginTop: '64px', // Add margin top equal to the height of the AppBar (adjust if necessary)
//   },

//   contentWrapper: {
//     flex: 1,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     padding: '20px',
//   },
//   mainSection: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     backgroundColor: '#f7f7f7',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//     maxWidth: '800px',
//     flex: 1,
//   },
//   header: {
//     fontSize: '2rem',
//     marginBottom: '20px',
    
//   },
//   card: {
//     backgroundColor: '#fff',
//     padding: '20px',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//   },
//   input: {
//     width: '100%',
//     padding: '10px',
//     marginBottom: '10px',
//     border: '1px solid #ddd',
//     borderRadius: '4px',
//   },
//   button: {
//     backgroundColor: '#007bff',
//     color: 'white',
//     padding: '10px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '16px',
//     marginBottom: '10px',
//     width: '100%',
//   },
//   recommendations: {
//     marginTop: '20px',
//     maxHeight: '150px',
//     overflowY: 'auto',
//     wordWrap: 'break-word',
//   },
//   recommendationHeader: {
//     fontSize: '1.2rem',
//     marginBottom: '10px',
//   },
//   recommendationText: {
//     fontSize: '1rem',
//     color: '#333',
//   },
//   resultsSection: {
//     textAlign: 'center',
//     marginTop: '30px',
//     width: '100%',
//     maxWidth: '800px',
//     flexShrink: 0,
//   },
//   resultsHeader: {
//     fontSize: '1.5rem',
//     marginBottom: '20px',
//   },
//   buttonGroup: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     gap: '10px',
//     justifyContent: 'center',
//   },
//   resultButton: {
//     backgroundColor: '#007bff',
//     color: 'white',
//     padding: '10px',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//     fontSize: '14px',
//   },
//   resultCard: {
//     marginTop: '20px',
//     padding: '20px',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//     width: '100%',
//   },
// };

// export default Home;



import React, { useState, useEffect } from 'react';
import SymptomDropdown from './SymptomDropdown.js';
import axios from "axios";
import Footer from '../components/Footer';
import Loader from './Loader'; // Assuming you have a loader component

const Home = () => {
  const [symptoms, setSymptoms] = useState('');
  const [Results, setResult] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [suggestions, setSuggestions] = useState('');
  const [showFooter, setShowFooter] = useState(true);
  const [selectedResult, setSelectedResult] = useState('');
  const [predictionMade, setPredictionMade] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for prediction
  const [error, setError] = useState(null); // Error state for API call

  const handleSpeechRecognition = () => {
    // Speech recognition code (same as before)
        if (!('webkitSpeechRecognition' in window)) {
      alert('Speech recognition not supported in this browser.');
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setSymptoms((prev) => `${prev} ${speechResult}`.trim());
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleSymptomChange = (selectedOptions) => {
    // Update symptoms based on dropdown selection
        setSelectedSymptoms(selectedOptions);
    setSymptoms(selectedOptions.map(option => option.label).join(', '));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(null); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:5000/api/submit", {
        symptoms,
      });
      setResult(response.data);
      setPredictionMade(true);
    } catch (error) {
      console.error("Error submitting the form", error);
      setError('An error occurred while fetching the prediction.'); // Set error message
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleClear = () => {
    setSymptoms('');
    setResult('');
    setSelectedSymptoms([]);
    setSelectedResult('');
    setPredictionMade(false);
    setSuggestions('');
  };

  const handleResultClick = (resultType) => {
    if (!predictionMade) {
      alert('You haven\'t predicted the disease yet. Please click "Predict" first.');
    } else {
      setSelectedResult(resultType);
    }
  };

  const recommendations = suggestions ? suggestions : symptoms;

  // Handle scroll event to hide footer at the bottom of the page
  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setShowFooter(false);
      } else {
        setShowFooter(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderSelectedResult = () => {
    if (!predictionMade) {
      return null;
    }
    
    switch (selectedResult) {
      case 'Disease':
        return <p>{Results.predicted_disease}</p>;
      case 'Description':
        return <p>{Results.description}</p>;
      case 'Precaution':
        return <ul>{Results.precautions[0].map((item, index) => <li key={index}>{item}</li>)}</ul>;
      case 'Medications':
        return <ul>{Results.medications[0].split(', ').map((item, index) => <li key={index}>{item}</li>)}</ul>;
      case 'Workouts':
        return <ul>{Results.workout.map((item, index) => <li key={index}>{item}</li>)}</ul>;
      case 'Diets':
        return <ul>{Results.diets[0].split(', ').map((item, index) => <li key={index}>{item}</li>)}</ul>;
      default:
        return null;
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.contentWrapper}>
        <div style={styles.mainSection}>
          <h1 style={styles.header}>Health Care Center</h1>
          <div style={styles.card}>
            <SymptomDropdown setSuggestions={setSuggestions} />
            <input
              type="text"
              id="symptoms"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
              placeholder="Type symptoms such as itching, sleeping, aching etc."
              style={styles.input}
            />
            <button
              onClick={handleSpeechRecognition}
              style={styles.button}
              disabled={isListening}
            >
              {isListening ? 'Listening...' : 'Start Speech Recognition'}
            </button>
            <button style={styles.button} onClick={handleSubmit} disabled={loading}>
              {loading ? 'Loading...' : 'Predict'}
            </button>
            <button style={styles.button} onClick={handleClear}>Clear</button>
            <div style={styles.recommendations}>
              <h3 style={styles.recommendationHeader}>Recommendations:</h3>
              <p style={styles.recommendationText}>{recommendations}</p>
            </div>
            {error && <p style={styles.errorText}>{error}</p>} {/* Display error message */}
          </div>
        </div>

        <div style={styles.resultsSection}>
          <h2 style={styles.resultsHeader}>Our AI System Results</h2>

          <div style={styles.buttonGroup}>
            <button style={styles.resultButton} onClick={() => handleResultClick('Disease')}>Disease</button>
            <button style={styles.resultButton} onClick={() => handleResultClick('Description')}>Description</button>
            <button style={styles.resultButton} onClick={() => handleResultClick('Precaution')}>Precaution</button>
            <button style={styles.resultButton} onClick={() => handleResultClick('Medications')}>Medications</button>
            <button style={styles.resultButton} onClick={() => handleResultClick('Workouts')}>Workouts</button>
            <button style={styles.resultButton} onClick={() => handleResultClick('Diets')}>Diets</button>
          </div>

          <div style={styles.resultCard}>
            {renderSelectedResult()}
          </div>
        </div>
      </div>

      {showFooter && <Footer />}
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    marginTop: '64px',
  },
  contentWrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  mainSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '800px',
    flex: 1,
  },
  header: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '10px',
    width: '100%',
  },
  recommendations: {
    marginTop: '20px',
    maxHeight: '150px',
    overflowY: 'auto',
    wordWrap: 'break-word',
  },
  recommendationHeader: {
    fontSize: '1.2rem',
    marginBottom: '10px',
  },
  recommendationText: {
    fontSize: '1rem',
    color: '#333',
  },
  resultsSection: {
    textAlign: 'center',
    marginTop: '30px',
    width: '100%',
    maxWidth: '800px',
    flexShrink: 0,
  },
  resultsHeader: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  resultButton: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '120px',
  },
  resultCard: {
    marginTop: '20px',
    textAlign: 'left',
    width: '100%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: '10px',
  },
};

export default Home;

