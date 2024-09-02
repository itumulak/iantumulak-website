import { Box, Modal } from "@mui/material";

export default ({open, handleClose, videoUrl}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: 'blur(8px)',
                bgcolor: 'rgba(0, 0, 0, 0.6)',
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "800px",
                    height: "auto",
                    aspectRatio: "16/9",
                    outline: "none",
                    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
                    bgcolor: "#282c34",
                }}
            >
                <iframe width="100%" height="100%" src={videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Box>
        </Modal>
    )
}