async function ourCopyFunction(id) {
    try {
        // Get the element by ID
        const codeElement = document.getElementById(id);
        
        // Check if the element exists
        if (!codeElement) {
            console.error('Element with the given ID not found:', id);
            return;
        }

        // Get the text content of the code element
        const codeText = codeElement.textContent;

        // Use the Clipboard API to copy the text
        await navigator.clipboard.writeText(codeText);

        // Optionally, provide feedback to the user
        alert('Code copied to clipboard!');
    } catch (error) {
        console.error('Failed to copy text:', error);
        alert('Failed to copy the code. Please try again.');
    }
}
