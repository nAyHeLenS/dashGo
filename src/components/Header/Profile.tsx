import { Flex, Box, Avatar, Text} from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
  }
  

export function Profile({ showProfileData }: ProfileProps){
    return (
        <Flex align='center'>
            <Box 
            mr='4' 
            textAlign='right'> 
                <Text> Nayara Helen </Text>
                <Text color='gray.300' fontSize='small'> 
                    nay.silva@gmail.com 
                </Text>
            </Box>
            
            <Avatar size='md' name='Nayara Helen' src='https://github.com/nAyHelenS.png'/>
        </Flex>
    )
}