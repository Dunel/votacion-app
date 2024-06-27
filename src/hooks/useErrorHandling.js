import { useCallback } from 'react';
import { Alert } from 'react-native';

// Función para estandarizar los errores
function standardizeErrors(errorData) {
    if (typeof errorData === 'string') {
        return [errorData];
    } else if (Array.isArray(errorData)) {
        return errorData;
    } else if (errorData.errors && Array.isArray(errorData.errors)) {
        return errorData.errors;
    } else {
        return ["Unknown error"];
    }
}

// Hook personalizado para manejar errores
export function useErrorHandling() {
    const handleError = useCallback((textError, error) => {
        const errorData = error.response?.data || error.message || "Unknown error";
        const errors = standardizeErrors(errorData);
        Alert.alert(textError, errors.join('\n'), [
            { text: "OK" },
        ]);
    }, []);

    return { handleError };
}
