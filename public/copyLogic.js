async function ourCopyFunction(id) {
    try {
        // Get the element by ID
        const codeElement = document.getElementById(id);
        
        if (!codeElement) {
            console.error('Element with the given ID not found:', id);
            return;
        }

        // Get the text content of the code element
        const codeText = codeElement.textContent;

        await navigator.clipboard.writeText(codeText);

        
        alert('Code copied to clipboard!');
    } catch (error) {
        console.error('Failed to copy text:', error);
        alert('Failed to copy the code. Please try again.');
    }
}
