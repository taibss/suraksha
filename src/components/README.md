# Decision Tree Integration

This directory contains React components that integrate the Suraksha scam decision tree into the main application.

## Components

### 1. DecisionTree.tsx
The main decision tree component that renders the interactive scam decision tree.

**Features:**
- Interactive decision tree with 4 main doors/categories
- Search functionality for specific scam types
- AI fallback for unknown scam types
- Responsive design
- Step-by-step guidance through decision nodes

**Data Structure:**
- Uses JSON-based data structure for easy maintenance
- Supports doors, questions, options, and leaf nodes
- Each leaf node provides detailed guidance including actions, evidence, authorities, and draft documents

### 2. DecisionTreeWrapper.tsx
A wrapper component that demonstrates how to integrate the decision tree with the Header component.

**Features:**
- Manages application state (language, current page)
- Renders appropriate content based on current page
- Demonstrates the integration pattern

### 3. Header.tsx (Modified)
The main Header component has been modified to support the decision tree integration.

**Changes:**
- Added `currentPage` prop to track current view
- Modified "Get Help" button to navigate to 'decision-tree'
- Conditionally renders DecisionTree component when currentPage is 'decision-tree'

## How to Use

### Basic Integration

```tsx
import React from 'react';
import Header from './Header';
import DecisionTree from './DecisionTree';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  
  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header 
        currentLang="en"
        onLanguageChange={(lang) => console.log('Language changed:', lang)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />
      
      {currentPage === 'decision-tree' ? (
        <DecisionTree />
      ) : (
        <div>Your other application content here</div>
      )}
    </div>
  );
};
```

### Using the Wrapper

```tsx
import DecisionTreeWrapper from './DecisionTreeWrapper';

const App = () => {
  return <DecisionTreeWrapper />;
};
```

## Navigation Flow

1. User clicks "Get Help" in the Header
2. `currentPage` changes to 'decision-tree'
3. Header conditionally renders the DecisionTree component
4. User interacts with the decision tree:
   - Selects a door (main category)
   - Answers questions through options
   - Reaches leaf nodes with specific guidance
   - Can search for specific scam types
   - Can use AI fallback for unknown issues

## Styling

The decision tree uses CSS custom properties for consistent theming:

- `--bg`: Background color
- `--panel`: Panel background color
- `--text`: Primary text color
- `--muted`: Muted text color
- `--line`: Border/line color
- `--accent`: Accent color for highlights
- `--warn`: Warning color
- `--danger`: Danger color

## Data Structure

The decision tree data follows this structure:

```typescript
interface Door {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  question: string;
  options: Option[];
}

interface Option {
  label: string;
  question?: string;
  options?: Option[];
  leaf?: string; // Points to leaf ID
}

interface Leaf {
  title: string;
  urgency: string;
  explanation: string;
  actions: string[];
  evidence: string[];
  authorities: string[];
  drafts: string[];
  lawyer: string;
}
```

## Customization

### Adding New Scam Types

1. Add new door to `DecisionTreeData.doors`
2. Add new leaf nodes to `DecisionTreeData.leaves`
3. Connect options to leaf IDs using the `leaf` property

### Styling Customization

Modify CSS variables in `DecisionTree.css` to match your application's design system.

### Content Updates

The decision tree data is centralized in `DecisionTree.tsx`, making it easy to:
- Update existing scam information
- Add new scam types
- Modify action steps
- Update authority contacts

## Accessibility

The component includes:
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly labels
- Focus indicators for interactive elements

## Performance

- Uses React state for efficient re-rendering
- Memoization for expensive operations
- Lazy loading of content based on user interaction
- Minimal DOM manipulation

## Testing

To test the integration:

1. Click "Get Help" in the Header
2. Verify the decision tree loads correctly
3. Test navigation through different doors
4. Verify search functionality
5. Test AI fallback feature
6. Test responsive design on different screen sizes

## Future Enhancements

- Add support for multiple languages
- Integrate with real AI classification
- Add user session tracking
- Implement save/resume functionality
- Add print-friendly views
- Integrate with backend API for dynamic content