import React from 'react';

const RootComponent = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

RootComponent.propTypes = {
   children: React.PropTypes.object.isRequired
};

RootComponent.displayName = 'RootComponent';

export default RootComponent;
