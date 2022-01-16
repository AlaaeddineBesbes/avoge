
import DashboardIcon from '@material-ui/icons/Dashboard';
import CropLandscapeIcon from '@material-ui/icons/CropLandscape';
import Button from '@material-ui/core/Button'
import { useMoralis } from "react-moralis";
import AppsIcon from '@material-ui/icons/Apps';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { CastConnected } from '@material-ui/icons';
import { useWeb3 } from '@3rdweb/hooks';
import React, { useState, useEffect } from 'react'



const Header = () => {
    const { authenticate, isAuthenticated, user ,logout } = useMoralis();
    if (!isAuthenticated) {
        
        return(
            <div className="flex shadow-sm  p-4 justify-between  ">
                <div className="flex space-x-3  ">
                    <p className="text-gray-400">Address </p>
                    <p></p>
                    <CropLandscapeIcon className="text-gray-300" />
                    <DashboardIcon className="text-gray-300" />
    
                </div>
                <div className="flex ">
                <Button variant="contained" size="large" onClick={() => authenticate()}
   >Connect Your Wallet</Button>                </div>
            </div>)
    }
    else{
        const [address, setAddress] = useState();

        useEffect(() => {
            if (isAuthenticated) {
              setAddress(user.attributes.ethAddress);
            }
          }, [isAuthenticated]);

        return(
            <div className="flex shadow-sm  p-4 justify-between  ">
                <div className="flex space-x-3  ">
                    <p className="text-gray-400">Adress </p>
                    <p>{address}</p>
                    <CropLandscapeIcon className="text-gray-300" />
                    <DashboardIcon className="text-gray-300" />
    
                </div>
                <div className="flex ">
                <Button variant="contained" size="large" onClick={() => logout()}
   >Disconnect Your Wallet</Button>                </div>
            </div>)
    }
    
       

    
        
    
}

export default Header
