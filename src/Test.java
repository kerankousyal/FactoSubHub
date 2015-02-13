import java.awt.image.BufferedImage;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.media.jai.NullOpImage;
import javax.media.jai.OpImage;
import javax.media.jai.PlanarImage;

import com.sun.media.jai.codec.FileSeekableStream;
import com.sun.media.jai.codec.ImageCodec;
import com.sun.media.jai.codec.ImageDecoder;
import com.sun.media.jai.codec.ImageEncoder;
import com.sun.media.jai.codec.SeekableStream;
import com.sun.media.jai.codec.TIFFDecodeParam;
import com.sun.media.jai.codec.TIFFEncodeParam;


	public class Test {
		
	public static void main(String [] args) throws IOException {
	
		List<Integer> a1 = new ArrayList<Integer>(Arrays.asList(1,2,3,4,5));
		List<Integer> a2 = new ArrayList<Integer>(Arrays.asList(3,4));
		
		a1.addAll(a2); // 1,2,3,4,5,3,4
		List<Integer> a3 = new ArrayList<Integer>(a2);
		a3.retainAll(a1);
		System.out.println(a3);
		
		a2.removeAll(a3);
		
		System.out.println(a3);
		
	}
 }