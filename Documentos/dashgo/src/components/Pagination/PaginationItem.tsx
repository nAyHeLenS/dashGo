import { Button } from "@chakra-ui/react";

interface PaginationsItemProps {
    number: number;
    IsCurrent?: boolean
}

export function PaginationItem({ IsCurrent = false, number }: PaginationsItemProps){
    if(IsCurrent){
        return(
            <Button
            size='sm'
            fontSize='xs'
            width='4'
            colorScheme='pink'
            disabled
            _disabled={{ 
                bgColor: 'pink.500',
                cursor: 'default',
            }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
        size='sm'
        fontSize='xs'
        width='4'
        bgColor='gray.700'
        _hover={{ bgColor: 'gray.500' }}
        >
            {number}
        </Button>
    )

}