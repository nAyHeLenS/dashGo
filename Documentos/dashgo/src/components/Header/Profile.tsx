import { Flex, Box, Avatar, Text} from "@chakra-ui/react";

export function Profile(){
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'> 
                <Text> Nayara Helen </Text>
                <Text color='gray.300' fontSize='small'> 
                    nayaraHelenSilva2@gmail.com 
                </Text>
            </Box>
            
            <Avatar size='md' name='Nayara Helen' src='https://github.com/nAyHelenS.png'/>
        </Flex>
    )
}