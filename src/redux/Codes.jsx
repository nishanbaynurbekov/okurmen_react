import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const shuffleArray = (array = []) => {
  if (!Array.isArray(array)) return [];
  const shuffled = [...array];
  for(let i = shuffled.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * ( i + 1 ));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const useConfirmToast = () => {
  const confirm = ({ message = "Ырастайсызбы?", confirmText = "Ооба", cancelText = "Жок" }) => {
    return new Promise((resolve) => {
      const id = toast(
        <div style={{ width: '100%', fontFamily: 'sans-serif' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              backgroundColor: '#fef3c7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              ⚠️
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold', color: '#111827' }}>
                Ырастоо
              </h4>
              <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#4b5563', lineHeight: '1.4' }}>
                {message}
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '16px' }}>
            <button
              onClick={() => { toast.dismiss(id); resolve(false); }}
              style={{
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#f3f4f6',
                color: '#1f2937',
                border: 'none',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              {cancelText}
            </button>
            <button
              onClick={() => { toast.dismiss(id); resolve(true); }}
              style={{
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#111827',
                color: '#ffffff',
                border: 'none',
                fontWeight: '600',
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              {confirmText}
            </button>
          </div>
        </div>,
        {
          autoClose: true,
          closeOnClick: false,
          closeButton: false,
          draggable: false,
          position: "top-center",
          style: {
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            border: '1px solid #e5e7eb',
            maxWidth: '380px',
            width: '100%'
          }
        }
      );
    });
  };
  return confirm;
};